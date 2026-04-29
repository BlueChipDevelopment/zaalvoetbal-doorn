import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AdminSubscription,
  BeheerNotificatiesService,
  NotificationsAnalytics,
  ReminderLogEntry,
} from '../../../services/beheer-notificaties.service';
import { TestBroadcastDialogComponent } from './test-broadcast-dialog.component';

@Component({
  selector: 'app-admin-notificaties',
  templateUrl: './admin-notificaties.component.html',
  styleUrls: ['./admin-notificaties.component.scss'],
})
export class AdminNotificatiesComponent implements OnInit {
  private readonly refresh$ = new BehaviorSubject<void>(undefined);

  subscriptions$!: Observable<AdminSubscription[]>;
  history$!: Observable<ReminderLogEntry[]>;
  analytics$!: Observable<NotificationsAnalytics>;

  readonly subscriptionColumns = ['playerName', 'device', 'createdAt', 'lastSeenAt', 'active'];
  readonly historyColumns = ['sentAt', 'type', 'title', 'recipientsCount', 'succeededCount', 'expiredCount'];

  constructor(
    private beheer: BeheerNotificatiesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.subscriptions$ = this.refresh$.pipe(switchMap(() => this.beheer.getSubscriptionsForAdmin()));
    this.history$ = this.refresh$.pipe(switchMap(() => this.beheer.getReminderHistory(50)));
    this.analytics$ = this.refresh$.pipe(switchMap(() => this.beheer.getAnalytics()));
  }

  refreshAll(): void {
    this.refresh$.next();
  }

  openTestBroadcast(): void {
    const dialogRef = this.dialog.open(TestBroadcastDialogComponent, { width: '480px' });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.beheer.sendTestBroadcast(result.title, result.body).subscribe({
        next: r => {
          this.snackBar.open(
            `Verstuurd: ${r.sent}/${r.total} (verlopen: ${r.deactivated})`,
            'OK',
            { duration: 4000 },
          );
          setTimeout(() => this.refreshAll(), 1500);
        },
        error: err => {
          console.error('Test-broadcast failed:', err);
          this.snackBar.open('Versturen mislukt — check console.', 'Sluiten', { duration: 5000 });
        },
      });
    });
  }
}
