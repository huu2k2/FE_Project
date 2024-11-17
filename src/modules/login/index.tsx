import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { CustomButton } from "../../components/CustomButton";
import { LocginModel } from "../../models/login";
import { loginStaff } from "../../services/login-service";
import { toast } from "react-toastify";
import { decodeToken } from "../../utils/decode-token";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [data, setDate] = useState<LocginModel>({ username: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = async () => {
    const ks = await loginStaff(data);
    if (ks?.data) {
      toast.success("Login thành công!");

      // Giải mã token và kiểm tra vai trò
      const token = await decodeToken(ks?.data.token);

      if (token) {
        console.log("Role:", token); // Kiểm tra role
        if (token?.role?.name === "ADMIN") {
          // Nếu vai trò là Admin, chuyển hướng tới trang Admin
          toast.success("Chào mừng Admin!");
          // Điều hướng tới trang admin, ví dụ:
          navigate('/management');
        } else if (token?.role?.name === "User") {
          // Nếu vai trò là User, điều hướng tới trang User
          toast.success("Chào mừng người dùng!");
          navigate('/user');
        } else {
          // Thông báo nếu không phải Admin hay User
          toast.error("Vai trò không hợp lệ");
        }
      }
    }
  };

  const handleChangeText = (key: keyof LocginModel, value: string) => {
    setDate((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col w-[100%] h-screen lg:w-auto lg:flex-row lg:min-h-screen bg-gray-100 ">
        <div className="w-full lg:w-[65%] flex items-center justify-center bg-backgroundColor">
          <img src={logo} alt="Logo" className="w-[70%]" />
        </div>

        <div className="w-full lg:w-[35%] flex items-center justify-center p-8 ">
          <div className="w-[100%] ">
            <h2 className="text-6xl font-bold text-center text-gray-800 mb-6">
              Đăng Nhập
            </h2>
            <form
              className="w-full flex flex-col items-center justify-center gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <input
                type="text"
                id="username"
                className="w-[90%] lg:w-[70%] px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập tên đăng nhập"
                value={data?.username}
                onChange={(e) => handleChangeText("username", e.target.value)}
              />

              <input
                type="password"
                id="password"
                className="w-[90%] lg:w-[70%] px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập mật khẩu"
                value={data?.password}
                onChange={(e) => handleChangeText("password", e.target.value)}
              />

              <div className="flex items-center justify-between w-[90%]">
                <CustomButton
                  bgColor="#FFAA02"
                  title="Đăng nhập"
                  onClick={handleLogin}
                ></CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
