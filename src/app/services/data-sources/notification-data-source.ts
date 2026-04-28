import { Observable } from 'rxjs';
import { PushSubscriptionRecord } from '../../interfaces/IPushSubscription';

export abstract class NotificationDataSource {
  abstract getAllSubscriptions(): Observable<PushSubscriptionRecord[]>;
  abstract addSubscription(record: PushSubscriptionRecord): Observable<void>;
  abstract deactivateSubscription(endpoint: string): Observable<void>;
}
