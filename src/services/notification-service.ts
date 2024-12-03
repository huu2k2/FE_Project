import axiosInstance from "../api";
import { API } from "../models/api";
import { NotificationModel } from "../models/notification";
import baseUrl from "../utils/baseURL";

const getNotifications = (): Promise<API<NotificationModel[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axiosInstance.get<API<NotificationModel[]>>(
        `${baseUrl}/notifications`
      );
      resolve(result.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};

export { getNotifications };
