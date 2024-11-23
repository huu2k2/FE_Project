import axiosInstance from "../api";
import baseUrl from "../utils/baseURL";

export enum TypeGet {
  SENDER = "SENDER",
  RECEIVER = "RECEIVER",
}

export interface GetNotficationInput {
  type: TypeGet;
  senderId: string;
}

const getAllNotificationById = async (query: GetNotficationInput): Promise<any> => {
    try {
      // Gọi API với query parameters từ `query`
      const result = await axiosInstance.get<any>(
        `${baseUrl}/notifications`,
        {
          params: {
            type: query.type,
            senderId: query.senderId,
          },
        }
      );
  
      return result.data;
    } catch (error) {
      // Bắt lỗi và xử lý lỗi
      console.error('Error fetching notifications:', error);
      throw error; // Ném lỗi để xử lý ở tầng gọi hàm
    }
  };
  
export { getAllNotificationById };
