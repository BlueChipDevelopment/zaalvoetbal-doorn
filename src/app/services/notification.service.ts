import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { NotificationDataSource } from './data-sources/notification-data-source';
import { PushSubscriptionRecord } from '../interfaces/IPushSubscription';
import { getCurrentDateTimeISO } from '../utils/date-utils';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private isSupported$ = new BehaviorSubject<boolean>(false);
  private isEnabled$ = new BehaviorSubject<boolean>(false);
  private subscription$ = new BehaviorSubject<PushSubscription | null>(null);
  // VAPID public key (from environment)
  private readonly vapidPublicKey = environment.vapidPublicKey;

  constructor(private dataSource: NotificationDataSource) {
    this.checkSupport();
    this.checkCurrentStatus();
  }

  get isSupported(): Observable<boolean> {
    return this.isSupported$.asObservable();
  }

  get isEnabled(): Observable<boolean> {
    return this.isEnabled$.asObservable();
  }

  get currentSubscription(): Observable<PushSubscription | null> {
    return this.subscription$.asObservable();
  }

  get isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  private checkSupport(): void {
    const isSupported = 'serviceWorker' in navigator && 
                       'PushManager' in window && 
                       'Notification' in window;
    
    this.isSupported$.next(isSupported);
    console.log('🔔 Push notifications supported:', isSupported, this.isIOS ? '(iOS device detected)' : '');
  }

  private async checkCurrentStatus(): Promise<void> {
    if (!this.isSupported$.value) {
      return;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      
      if (subscription) {
        this.subscription$.next(subscription);
        this.isEnabled$.next(true);
        console.log('✅ Found existing push subscription');
      } else {
        this.isEnabled$.next(false);
        console.log('❌ No existing push subscription found');
      }
    } catch (error) {
      console.error('❌ Error checking notification status:', error);
      this.isEnabled$.next(false);
    }
  }

  async requestPermission(playerName?: string): Promise<boolean> {
    if (!this.isSupported$.value) {
      console.log('❌ Push notifications not supported on this device/browser');
      return false;
    }

    try {
      // Check current permission state first - critical safety check
      if (Notification.permission === 'denied') {
        console.log('❌ Notification permission was previously denied by user');
        console.log('💡 User must manually enable notifications in browser settings');
        this.isEnabled$.next(false);
        return false;
      }

      // Request notification permission (skip prompt if already granted)
      let permission: NotificationPermission = Notification.permission;
      if (permission !== 'granted') {
        console.log('📱 Requesting notification permission from user...');
        permission = await Notification.requestPermission();
      } else {
        console.log('✅ Notification permission already granted');
      }
      
      if (permission !== 'granted') {
        console.log('❌ Notification permission not granted:', permission);
        return false;
      }
      
      console.log('✅ Notification permission confirmed, proceeding with subscription...');

      // Get service worker registration
      const registration = await navigator.serviceWorker.ready;
      
      // Subscribe to push notifications
      const applicationServerKey = this.urlBase64ToUint8Array(this.vapidPublicKey) as unknown as ArrayBuffer;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey
      });

      console.log('✅ Push subscription created:', subscription);

      // Store subscription
      this.subscription$.next(subscription);
      this.isEnabled$.next(true);

      // Save subscription to backend
      try {
        await this.saveSubscriptionToServer(subscription, playerName);
        console.log('✅ Notification setup completed successfully');
      } catch (saveError) {
        console.error('⚠️ Notifications enabled locally but failed to save to server:', saveError);
        // Save to localStorage as fallback
        this.saveSubscriptionToLocalStorage(subscription);
        console.log('📱 Subscription saved to localStorage as fallback');
      }

      return true;

    } catch (error) {
      console.error('❌ Error requesting notification permission:', error);
      this.isEnabled$.next(false);
      return false;
    }
  }

  async disableNotifications(): Promise<boolean> {
    try {
      const subscription = this.subscription$.value;
      
      if (subscription) {
        // Unsubscribe from push notifications
        await subscription.unsubscribe();
        console.log('✅ Push subscription unsubscribed');

        // Remove subscription from backend (we'll implement this later)
        await this.removeSubscriptionFromServer(subscription);
      }

      this.subscription$.next(null);
      this.isEnabled$.next(false);
      
      return true;

    } catch (error) {
      console.error('❌ Error disabling notifications:', error);
      return false;
    }
  }

  private async saveSubscriptionToServer(subscription: PushSubscription, playerName?: string): Promise<void> {
    try {
      const record: PushSubscriptionRecord = {
        endpoint: subscription.endpoint,
        keysP256dh: this.arrayBufferToBase64(subscription.getKey('p256dh')),
        keysAuth: this.arrayBufferToBase64(subscription.getKey('auth')),
        userAgent: navigator.userAgent,
        timestamp: getCurrentDateTimeISO(),
        active: true,
        playerName: (playerName || '').trim(),
      };

      console.log('💾 Saving subscription to server:', record);
      await firstValueFrom(this.dataSource.addSubscription(record));
      console.log('✅ Subscription saved successfully');
    } catch (error) {
      console.error('❌ Error saving subscription to server:', error);
      if (error instanceof TypeError) {
        console.error('Network error - check if backend is accessible');
      }
      throw error;
    }
  }

  private async removeSubscriptionFromServer(subscription: PushSubscription): Promise<void> {
    try {
      console.log('🗑️ Removing subscription from server:', subscription.endpoint);
      await firstValueFrom(this.dataSource.deactivateSubscription(subscription.endpoint));
      console.log('✅ Subscription marked as inactive on server');
    } catch (error) {
      console.error('❌ Error removing subscription from server:', error);
      // Don't throw — local state already updated
    }
  }

  private urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  private arrayBufferToBase64(buffer: ArrayBuffer | null): string {
    if (!buffer) return '';
    
    const bytes = new Uint8Array(buffer);
    let binary = '';
    bytes.forEach(byte => binary += String.fromCharCode(byte));
    return window.btoa(binary);
  }

  private saveSubscriptionToLocalStorage(subscription: PushSubscription): void {
    try {
      const subscriptionData = {
        endpoint: subscription.endpoint,
        keys: {
          p256dh: this.arrayBufferToBase64(subscription.getKey('p256dh')),
          auth: this.arrayBufferToBase64(subscription.getKey('auth'))
        },
        userAgent: navigator.userAgent,
        timestamp: getCurrentDateTimeISO(),
        active: true
      };

      localStorage.setItem('futsal-notification-subscription', JSON.stringify(subscriptionData));
    } catch (error) {
      console.error('❌ Error saving subscription to localStorage:', error);
    }
  }

  async checkPlayerNotificationStatus(playerName: string): Promise<boolean> {
    const normalizedPlayerName = playerName.trim();
    try {
      if (!this.isSupported$.value) {
        return false;
      }
      const registration = await navigator.serviceWorker.ready;
      const browserSubscription = await registration.pushManager.getSubscription();
      if (!browserSubscription) {
        console.log(`❌ No browser subscription found for ${normalizedPlayerName}`);
        return false;
      }
      const subs = await firstValueFrom(this.dataSource.getAllSubscriptions());
      const match = subs.find(s =>
        s.endpoint === browserSubscription.endpoint
        && s.active
        && s.playerName === normalizedPlayerName
      );
      if (match) {
        console.log(`✅ Found active notification subscription for ${normalizedPlayerName}`);
        return true;
      }
      console.log(`❌ No active subscription found for ${normalizedPlayerName}`);
      return false;
    } catch (error) {
      console.error('Error checking player notification status:', error);
      return false;
    }
  }

  getNotificationCapabilities(): string[] {
    if (!('serviceWorker' in navigator)) {
      return ['Je browser ondersteunt geen service workers'];
    }

    if (!('PushManager' in window)) {
      return ['Je browser ondersteunt geen push notifications'];
    }

    if (!('Notification' in window)) {
      return ['Je browser ondersteunt geen notifications'];
    }

    if (this.isIOS) {
      return [
        'iOS Safari ondersteunt web push notifications (vanaf iOS 16.4)',
        'Je krijgt notificaties zelfs als Safari gesloten is',
        'Voor de beste ervaring: voeg deze site toe aan je startscherm',
        'Zorg dat je iOS 16.4 of nieuwer hebt geïnstalleerd'
      ];
    }

    return [
      'Je browser ondersteunt push notifications volledig!',
      'Je ontvangt notificaties zelfs als de app gesloten is',
      'Notificaties werken op Android, Windows en Mac'
    ];
  }
}