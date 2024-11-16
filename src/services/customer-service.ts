import axiosInstance from "../api";
import { API } from "../models/api";
import { CustomerModel } from "../models/customer";
import baseUrl from "../utils/baseURL";

const createCustomer = (data: {
  name: string;
  phoneNumber: string;
}): Promise<API<CustomerModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<API<CustomerModel>>(
        `${baseUrl}/customers/`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllCustomer = (): Promise<API<CustomerModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<CustomerModel[]>>(
        `${baseUrl}/customers/`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getCustomerById = (customerId: string): Promise<API<CustomerModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<CustomerModel>>(
        `${baseUrl}/customers/${customerId}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const updateCustomer = (
  customerId: string,
  data: {
    name: string;
    phoneNumber: string;
  }
): Promise<API<CustomerModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<API<CustomerModel>>(
        `${baseUrl}/customers/${customerId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { createCustomer, getAllCustomer, getCustomerById, updateCustomer };
