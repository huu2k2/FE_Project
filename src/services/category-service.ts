import axiosInstance from "../api";
import { CategoryModel } from "../models/category";
import baseUrl from "../utils/baseURL";

const createCategory = (data: { name: string }): Promise<CategoryModel> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<CategoryModel>(
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

const updateCategory = (data: CategoryModel): Promise<CategoryModel> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.put<CategoryModel>(
        `${baseUrl}/categories/${data.categoryId}`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCategory = (id: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.delete<boolean>(
        `${baseUrl}/categories/${id}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { createCategory, getAllCategory, updateCategory, deleteCategory };
