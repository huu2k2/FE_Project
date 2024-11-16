import { OrderStatus } from "../enum/enum";

export interface OrderModel {
  orderId: string;
  customerId: string;
  totalAmount: number;
  status: OrderStatus;
  orderMergeId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
