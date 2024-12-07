import axiosInstance from "../api";
import { AccountModel, IAccountResponse } from "../models/account";
import { API } from "../models/api";
import baseUrl from "../utils/baseURL";

const createProfile = (data: AccountModel): Promise<API<IAccountResponse>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<API<IAccountResponse>>(
        `${baseUrl}/accounts/`,
        data
      );
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

const updateProfile = (data: AccountModel): Promise<API<IAccountResponse>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<API<IAccountResponse>>(
        `${baseUrl}/accounts/${data.accountId}`,
        data
      );
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

export {};
