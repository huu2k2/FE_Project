export interface NotificationModel {
  notificationId: string;
  title: string;
  content: string;
  customerId?: string;
  accountId?: string;
  createdAt: Date;
}
