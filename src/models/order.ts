import { OrderStatus } from "../enum/enum";
import { TableDetailModelSocket } from "./tableDetail";

export interface OrderModel {
  orderId: string;
  customerId: string;
  totalAmount: number;
  status: OrderStatus;
  orderMergeId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderModelSocket {
  orderId: string;
  customerId: string;
  totalAmount: number;
  status: OrderStatus;
  orderMergeId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  tableDetails: TableDetailModelSocket[];
}
