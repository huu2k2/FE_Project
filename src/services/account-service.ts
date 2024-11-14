import axiosInstance from "../api";
import { AccountModel, IAccountResponse } from "../models/account";
import { API } from "../models/api";
import baseUrl from "../utils/baseURL";

const createAccount = (data: AccountModel): Promise<API<IAccountResponse>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<API<IAccountResponse>>(
        `${baseUrl}/accounts/`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllAccount = (): Promise<API<AccountModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<AccountModel[]>>(
        `${baseUrl}/accounts/`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const updateAccount = (data: AccountModel): Promise<API<IAccountResponse>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<API<IAccountResponse>>(
        `${baseUrl}/accounts/${data.accountId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { createAccount, getAllAccount, updateAccount };
