import { Component, DestroyRef, OnInit, OnDestroy, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PwaInstallService } from './services/pwa-install.service';
import { PwaInstallGuideComponent } from './components/pwa-install-guide/pwa-install-guide.component';
import { UpdateService } from './services/update.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Zaalvoetbal-Doorn';
  showInstallButton = false;
  isInstalled = false;

  private destroyRef = inject(DestroyRef);

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private pwaInstallService: PwaInstallService,
    private updateService: UpdateService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Clean up old service workers from previous versions
    this.cleanupOldServiceWorkers();

    // Initialize update service for automatic updates
    this.updateService.initializeUpdateService();

    // Listen for messages from the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('📨 Received message from service worker:', event.data);
        
        if (event.data && event.data.type === 'PUSH_NOTIFICATION') {
          this.handleInAppNotification(event.data);
        }
      });
    }

    // Setup PWA install functionality
    this.pwaInstallService.canInstall
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(canInstall => {
        this.showInstallButton = canInstall && !this.isInstalled;
      });

    this.pwaInstallService.isInstalled
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(installed => {
        this.isInstalled = installed;
        this.showInstallButton = !installed;
      });
  }

  ngOnDestroy() {
    // Clean up if needed
  }

  /**
   * Clean up old service workers from previous versions
   * This prevents conflicts with the new ngsw-worker.js + push-handler-sw.js setup
   */
  private async cleanupOldServiceWorkers(): Promise<void> {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      console.log(`🔍 Found ${registrations.length} service worker registration(s)`);

      for (const registration of registrations) {
        const scriptURL = registration.active?.scriptURL || '';
        
        // Check for old Firebase Messaging service worker
        if (scriptURL.includes('firebase-messaging-sw.js')) {
          console.log('🗑️ Found old firebase-messaging-sw.js, unregistering...');
          const success = await registration.unregister();
          
          if (success) {
            console.log('✅ Successfully unregistered old firebase-messaging-sw.js');
            this.snackBar.open(
              'Oude notificatie service verwijderd. Pagina wordt vernieuwd...', 
              'OK',
              { duration: 3000 }
            );
            
            // Reload to register new service worker
            setTimeout(() => window.location.reload(), 3000);
          } else {
            console.warn('⚠️ Failed to unregister old service worker');
          }
        } else {
          console.log(`✅ Service worker OK: ${scriptURL}`);
        }
      }
    } catch (error) {
      console.error('❌ Error during service worker cleanup:', error);
    }
  }

  private handleInAppNotification(data: any) {
    console.log('🔔 Handling in-app notification:', data);
    
    // Create message for snackbar
    const message = `${data.title}: ${data.body}`;
    
    // Define action based on whether there's a URL
    const action = data.data?.url ? 'Bekijk' : 'OK';
    
    // Show elegant MatSnackBar notification
    const snackBarRef = this.snackBar.open(message, action, {
      duration: 8000, // 8 seconds auto-dismiss
      panelClass: ['futsal-notification', 'futsal-notification-info'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });

    // Handle action button click
    snackBarRef.onAction().subscribe(() => {
      console.log('🔗 User clicked snackbar action');
      
      // If there's a URL, navigate to it
      if (data.data?.url) {
        console.log('🔗 Navigating to:', data.data.url);
        window.open(data.data.url, '_blank');
      }
      
      console.log('✅ User acknowledged notification via SnackBar');
    });

    // Log when dismissed
    snackBarRef.afterDismissed().subscribe((info) => {
      if (info.dismissedByAction) {
        console.log('📤 SnackBar dismissed by action');
      } else {
        console.log('⏰ SnackBar auto-dismissed');
      }
    });
    
    console.log('✅ Elegant in-app notification displayed to user');
  }

  showInstallGuide() {
    const dialogRef = this.dialog.open(PwaInstallGuideComponent, {
      width: '400px',
      maxWidth: '90vw',
      disableClose: false,
      hasBackdrop: true,
      panelClass: 'pwa-install-dialog'
    });

    dialogRef.componentInstance.installed.subscribe(() => {
      this.snackBar.open('App gemarkeerd als geïnstalleerd!', 'OK', { duration: 3000, panelClass: ['futsal-notification', 'futsal-notification-success'] });
      dialogRef.close();
    });

    dialogRef.componentInstance.close.subscribe(() => {
      dialogRef.close();
    });
  }

  async installPWA() {
    this.showInstallGuide();
  }

  async logout() {
    try {
      await this.authService.signOut();
      this.snackBar.open('Succesvol uitgelogd', 'OK', {
        duration: 3000,
        panelClass: ['futsal-notification', 'futsal-notification-success']
      });
      this.router.navigate(['/']);
    } catch (error) {
      this.snackBar.open('Fout bij uitloggen', 'OK', {
        duration: 3000,
        panelClass: ['futsal-notification', 'futsal-notification-error']
      });
    }
  }
}