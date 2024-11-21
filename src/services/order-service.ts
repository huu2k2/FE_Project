import axiosInstance from "../api";
import { OrderStatus } from "../enum/enum";
import { API } from "../models/api";
import { OrderModel } from "../models/order";
import { OrderDetailModel } from "../models/orderdetail";
import baseUrl from "../utils/baseURL";

const createOrder = (data: {
  customerId: string;
}): Promise<API<OrderModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<API<OrderModel>>(
        `${baseUrl}/orders/`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllOrders = (): Promise<API<OrderModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<OrderModel[]>>(
        `${baseUrl}/orders/`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getOrderById = (orderId: string): Promise<API<OrderModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<OrderModel>>(
        `${baseUrl}/orders/${orderId}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const updateOrder = (
  orderId: string,
  data: {
    totalAmount: number;
    status: OrderStatus;
    orderMergeId?: string | null;
  }
): Promise<API<OrderModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<API<OrderModel>>(
        `${baseUrl}/customers/${orderId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getOrderDetailByOrderId = (
  orderId: String
): Promise<API<OrderDetailModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<OrderDetailModel[]>>(
        `${baseUrl}/orders/${orderId}/detail`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getOrderDetailByOrderIdOfMergeOrder = (
  orderId: String
): Promise<API<OrderDetailModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<OrderDetailModel[]>>(
        `${baseUrl}/orders/${orderId}/detail/payment`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  getOrderDetailByOrderId,
  getOrderDetailByOrderIdOfMergeOrder
};
