import axiosInstance from "../api";
import { ResStaffLoginDto, StaffLoginDto } from "../models/login";
import baseUrl from "../utils/baseURL";

const loginStaff = async (
  data: StaffLoginDto
): Promise<ResStaffLoginDto | undefined> => {
  try {
    const result = await axiosInstance.post<ResStaffLoginDto>(
      `${baseUrl}/login/staff`,
      data
    );
    console.log("===================" , result)
    return result.data;
  } catch (error) {}
};

export { loginStaff };
