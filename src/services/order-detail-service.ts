import axiosInstance from "../api";
import { OrderDetailStatus } from "../enum/enum";
import { API } from "../models/api";
import { OrderDetailModel } from "../models/orderdetail";
import baseUrl from "../utils/baseURL";

const createOrderDetail = (
  data: OrderDetailModel[]
): Promise<API<OrderDetailModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<API<OrderDetailModel>>(
        `${baseUrl}/orders/detail`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getOrderDetailById = (
  orderDetailId: string
): Promise<API<OrderDetailModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<OrderDetailModel[]>>(
        `${baseUrl}/orders/detail/${orderDetailId}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getOrderDetailByOrderId = (
  orderId: string
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

const updateOrderDetail = (
  orderDetailId: string,
  data: {
    quantity: number;
    status: OrderDetailStatus;
  }
): Promise<API<OrderDetailModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<API<OrderDetailModel>>(
        `${baseUrl}/orders/detail/${orderDetailId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export {
  createOrderDetail,
  getOrderDetailById,
  getOrderDetailByOrderId,
  updateOrderDetail,
};
