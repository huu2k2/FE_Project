import axiosInstance from "../api";
import { API } from "../models/api";
import { OrderDetailModel } from "../models/orderdetail";
import baseUrl from "../utils/baseURL";

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

export { getOrderDetailByOrderId };
