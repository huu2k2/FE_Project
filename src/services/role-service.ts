import axiosInstance from "../api";
import { RoleModel } from "../models/role";
import baseUrl from "../utils/baseURL";

const getAllRole = (): Promise<RoleModel[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<RoleModel[]>(`${baseUrl}/roles/`);
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

export { getAllRole };
