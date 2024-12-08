export interface PaymentModel {
  paymentId: string;
  orderId: string;
  amount: number;
  method: string;
  status: string;
  createdAt: Date;
  accountId?: string;
}
