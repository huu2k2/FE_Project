import axiosInstance from "../api";
import { CategoryModel } from "../models/category";
import baseUrl from "../utils/baseURL";

const createCategory = (data: { name: string }): Promise<CategoryModel[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.post<CategoryModel[]>(
        `${baseUrl}/category/`,
        data
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { createCategory };
