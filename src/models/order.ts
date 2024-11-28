import { OrderStatus } from "../enum/enum";
import { OrderDetailModel } from "./orderdetail";
import { TableDetailModelSocket } from "./tableDetail";

export interface OrderModel {
  orderId: string;
  customerId: string;
  totalAmount: number;
  status: OrderStatus;
  orderMergeId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  orderDetails: OrderDetailModel[];
}

export interface OrderModelSocket {
  orderId: string;
  customerId: string;
  totalAmount: number;
  status: OrderStatus;
  orderMergeId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  tableDetail: TableDetailModelSocket;
  orderDetails: OrderDetailModel[];
}
