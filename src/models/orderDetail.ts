import { OrderDetailStatus } from "../enum/enum";

export interface OrderDetailModel {
  orderDetailId: string;
  orderId: string;
  productId: string;
  quantity: number;
  status: OrderDetailStatus;
  createdAt: Date;
  updatedAt: Date;
}
