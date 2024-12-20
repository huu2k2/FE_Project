import { OrderDetailStatus } from "../enum/enum";
import { ProductModel } from "./product";

export interface OrderDetailModel {
  price: number;
  product: ProductModel;
  orderDetailId: string;
  orderId: string;
  productId: string;
  quantity: number;
  status: OrderDetailStatus;
  createdAt: Date;
  updatedAt: Date;
}
