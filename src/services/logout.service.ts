import axiosInstance from "../api";
import { LogoutCustomerDto, ResLogoutCustomerDto } from "../models/login";
import baseUrl from "../utils/baseURL";

const logoutCustomerService = async (
  data: LogoutCustomerDto
): Promise<ResLogoutCustomerDto | undefined> => {
  try {
    const result = await axiosInstance.post<ResLogoutCustomerDto>(
      `${baseUrl}/logout/staff`,
      data
    );
    return result.data;
  } catch (error) {}
};

export { logoutCustomerService };
