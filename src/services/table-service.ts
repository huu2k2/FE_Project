import axiosInstance from "../api";
import { TableModel } from "../models/table";
import baseUrl from "../utils/baseURL";

const createTable = (data: {
  name: string;
  areaId: string;
}): Promise<TableModel[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<TableModel[]>(
        `${baseUrl}/tables/`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllTable = (): Promise<TableModel[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<TableModel[]>(`${baseUrl}/tables/`);
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const updateTable = (data: TableModel): Promise<TableModel> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<TableModel>(
        `${baseUrl}/tables/${data.tableId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteTable = (id: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.delete<boolean>(
        `${baseUrl}/tables/${id}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { createTable, getAllTable, updateTable, deleteTable };
