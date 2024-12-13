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
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

const getAllOrdersOfCustomer = (
  customerId: string
): Promise<API<OrderModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<OrderModel[]>>(
        `${baseUrl}/orders/customer/${customerId}`
      );
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
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
    } catch (error: any) {
      reject(error.response.data);
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
    } catch (error: any) {
      reject(error.response.data);
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
    } catch (error: any) {
      reject(error.response.data);
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
    } catch (error: any) {
      reject(error.response.data);
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
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

const getTurnOver = (
  fromDay: string,
  toDay: string
): Promise<API<OrderModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<any[]>>(
        `${baseUrl}/orders/turnover`,
        {
          params: { fromDay, toDay },
        }
      );
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

const getOrdersByStatus = (status: string): Promise<API<OrderModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<OrderModel[]>>(
        `${baseUrl}/orders/status/${status}`
      );
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

export {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  getOrderDetailByOrderId,
  getOrderDetailByOrderIdOfMergeOrder,
  getAllOrdersOfCustomer,
  getTurnOver,
  getOrdersByStatus,
};
