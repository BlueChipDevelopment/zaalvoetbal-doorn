import { Component, DestroyRef, OnInit, OnDestroy, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SwPush } from '@angular/service-worker';
import { PwaInstallService } from './services/pwa-install.service';
import { PwaInstallGuideComponent } from './components/pwa-install-guide/pwa-install-guide.component';
import { UpdateService } from './services/update.service';
import { AuthService } from './services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Zaalvoetbal-Doorn';
  showInstallButton = false;
  isInstalled = false;
  showBackButton = false;

  private destroyRef = inject(DestroyRef);

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private pwaInstallService: PwaInstallService,
    private updateService: UpdateService,
    public authService: AuthService,
    private router: Router,
    private swPush: SwPush,
    private location: Location,
  ) {}

  ngOnInit() {
    // Clean up old service workers from previous versions
    this.cleanupOldServiceWorkers();

    // Initialize update service for automatic updates
    this.updateService.initializeUpdateService();

    // Push notifications via Angular's SwPush. ngsw toont zelf de OS-notificatie
    // (payload bevat een `notification`-key); we abonneren op messages om óók
    // een in-app snackbar te tonen wanneer de app op de voorgrond staat, en op
    // notificationClicks om navigatie af te handelen na een klik op de OS-toast.
    if (this.swPush.isEnabled) {
      this.swPush.messages
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((msg: any) => this.handleInAppNotification(msg?.notification ?? msg));

      this.swPush.notificationClicks
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(({ notification }) => {
          const url = (notification as any)?.data?.url;
          if (url) window.open(url, '_blank');
        });
    }

    // Track route changes to show/hide back button
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(event => {
        this.showBackButton = /^\/speler\//.test(event.urlAfterRedirects);
      });

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
   * Verwijder verouderde firebase-messaging-sw.js-registratie van pre-Supabase
   * gebruikers. Bij een match wordt de pagina herladen zodat ngsw verse
   * registratie pakt.
   */
  private async cleanupOldServiceWorkers(): Promise<void> {
    if (!('serviceWorker' in navigator)) return;
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        const scriptURL = registration.active?.scriptURL || '';
        if (scriptURL.includes('firebase-messaging-sw.js')) {
          const success = await registration.unregister();
          if (success) {
            this.snackBar.open(
              'Oude notificatie service verwijderd. Pagina wordt vernieuwd...',
              'OK',
              { duration: 3000 },
            );
            setTimeout(() => window.location.reload(), 3000);
          }
        }
      }
    } catch (error) {
      console.error('Service worker cleanup mislukt:', error);
    }
  }

  private handleInAppNotification(notification: { title?: string; body?: string; data?: { url?: string } }) {
    const message = `${notification.title ?? 'Zaalvoetbal Doorn'}: ${notification.body ?? ''}`;
    const url = notification.data?.url;
    const snackBarRef = this.snackBar.open(message, url ? 'Bekijk' : 'OK', {
      duration: 8000,
      panelClass: ['futsal-notification', 'futsal-notification-info'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    if (url) {
      snackBarRef.onAction().subscribe(() => window.open(url, '_blank'));
    }
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

  goBack(): void {
    this.location.back();
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