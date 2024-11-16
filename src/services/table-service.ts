import axiosInstance from "../api";
import { API } from "../models/api";
import { TableModel } from "../models/table";
import { TableDetailModel } from "../models/tableDetail";
import baseUrl from "../utils/baseURL";

const createTable = (data: {
  name: string;
  areaId: string;
}): Promise<API<TableModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<API<TableModel[]>>(
        `${baseUrl}/tables/`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllTable = (): Promise<API<TableModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<TableModel[]>>(
        `${baseUrl}/tables/`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const updateTable = (data: TableModel): Promise<API<TableModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<API<TableModel>>(
        `${baseUrl}/tables/${data.tableId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteTable = (id: string): Promise<API<boolean>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.delete<API<boolean>>(
        `${baseUrl}/tables/${id}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const createTableDetail = (id: string): Promise<API<TableDetailModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<API<TableDetailModel>>(
        `${baseUrl}/tables/${id}/detail`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export {
  createTable,
  getAllTable,
  updateTable,
  deleteTable,
  createTableDetail,
};
