import axiosInstance from "../api";
import { AreaModel } from "../models/area";
import baseUrl from "../utils/baseURL";

const createArea = (data: { name: string }): Promise<AreaModel[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<AreaModel[]>(
        `${baseUrl}/areas/`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllArea = (): Promise<AreaModel[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<AreaModel[]>(`${baseUrl}/areas/`);
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const updateArea = (data: AreaModel): Promise<AreaModel> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<AreaModel>(
        `${baseUrl}/areas/${data.areaId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteArea = (id: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.delete<boolean>(
        `${baseUrl}/areas/${id}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { createArea, getAllArea, updateArea, deleteArea };
