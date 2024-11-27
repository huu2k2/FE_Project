import axiosInstance from "../api";
import { API } from "../models/api";
import { PaymentModel } from "../models/payment";
import baseUrl from "../utils/baseURL";

const createPayment = (
  orderId: string,
  data: { amount: number; method: string }
): Promise<API<PaymentModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<API<PaymentModel>>(
        `${baseUrl}/payments/order/${orderId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { createPayment };
