import axiosInstance from "../api";
import { API } from "../models/api";
import { CategoryModel } from "../models/category";
import baseUrl from "../utils/baseURL";

const createCategory = (data: {
  name: string;
}): Promise<API<CategoryModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<API<CategoryModel>>(
        `${baseUrl}/categories/`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllCategory = (): Promise<CategoryModel[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<CategoryModel[]>(
        `${baseUrl}/categories/`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const updateCategory = (data: CategoryModel): Promise<API<CategoryModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<API<CategoryModel>>(
        `${baseUrl}/categories/${data.categoryId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCategory = (id: string): Promise<API<boolean>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.delete<API<boolean>>(
        `${baseUrl}/categories/${id}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { createCategory, getAllCategory, updateCategory, deleteCategory };
