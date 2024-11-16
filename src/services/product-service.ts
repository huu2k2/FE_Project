import axiosInstance from "../api";
import { API } from "../models/api";
import { ProductModel, ProductQuery } from "../models/product";
import baseUrl from "../utils/baseURL";

const getAllProduct = (query: ProductQuery): Promise<ProductModel[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<ProductModel[]>(
        `${baseUrl}/products/`,
        {
          params: query,
        }
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getRandProduct = (): Promise<API<ProductModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<ProductModel[]>>(
        `${baseUrl}/products/rand/products`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getProductByCategoryId = (
  categoryId: string
): Promise<API<ProductModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<ProductModel[]>>(
        `${baseUrl}/products/category/${categoryId}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const getProductById = (productId: string): Promise<API<ProductModel>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<ProductModel>>(
        `${baseUrl}/products/${productId}`
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export {
  getAllProduct,
  getProductByCategoryId,
  getProductById,
  getRandProduct,
};
