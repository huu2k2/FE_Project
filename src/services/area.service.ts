import axiosInstance from "../api";
import { API } from "../models/api";
import { AreaModel } from "../models/area";
import baseUrl from "../utils/baseURL";

const createArea = (data: { name: string }): Promise<API<AreaModel[]>> => {
  return new Promise(async (resolve, reject) => {
    console.log(data);
    try {
      let result = await axiosInstance.post<API<AreaModel[]>>(
        `${baseUrl}/areas/`,
        data
      );

      console.log(result.data);
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

const getAllArea = (): Promise<API<AreaModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<AreaModel[]>>(
        `${baseUrl}/areas/`
      );
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

const updateArea = (data: AreaModel): Promise<API<AreaModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<API<AreaModel>>(
        `${baseUrl}/areas/${data.areaId}`,
        data
      );
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

const deleteArea = (id: string): Promise<API<boolean>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.delete<API<boolean>>(
        `${baseUrl}/areas/${id}`
      );
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

export { createArea, getAllArea, updateArea, deleteArea };
