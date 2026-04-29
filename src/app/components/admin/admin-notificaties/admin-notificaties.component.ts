import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  AdminSubscription,
  BeheerNotificatiesService,
  NotificationsAnalytics,
  ReminderLogEntry,
} from '../../../services/beheer-notificaties.service';

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

  constructor(private beheer: BeheerNotificatiesService) {}

  ngOnInit(): void {
    this.subscriptions$ = this.refresh$.pipe(switchMap(() => this.beheer.getSubscriptionsForAdmin()));
    this.history$ = this.refresh$.pipe(switchMap(() => this.beheer.getReminderHistory(50)));
    this.analytics$ = this.refresh$.pipe(switchMap(() => this.beheer.getAnalytics()));
  }

  refreshAll(): void {
    this.refresh$.next();
  }
}
