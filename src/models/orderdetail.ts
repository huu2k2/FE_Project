import { ProductModel } from "./product";

export interface OrderDetailModel {
  orderDetailId: string;
  orderId: string;
  productId: string;
  price: number;
  quantity: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  product: ProductModel;
}
