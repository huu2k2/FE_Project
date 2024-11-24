import { jwtDecode } from "jwt-decode";

// Định nghĩa kiểu dữ liệu cho payload của JWT (tùy thuộc vào cấu trúc của bạn)
interface JwtPayload {
  role: {
    name: string;
  };
  userId?: string;
  customerId?: string;
  username: string;
  exp: number;  // thời gian hết hạn của token
}

export const decodeToken = (token: string): JwtPayload | null => {
  try {
    // Giải mã token
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded; // Trả về payload đã giải mã
  } catch (error) {
    console.error("Error decoding token:", error);
    return null; // Trả về null nếu có lỗi
  }
};
