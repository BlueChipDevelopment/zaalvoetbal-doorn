/**
 * Domein-representatie van een Web Push subscription, los van het browser-
 * `PushSubscription`-object. Mapt 1:1 op de kolommen in de Notificaties-sheet.
 */
export interface PushSubscriptionRecord {
  endpoint: string;
  keysP256dh: string;
  keysAuth: string;
  userAgent: string;
  timestamp: string;
  active: boolean;
  playerName: string;
}
