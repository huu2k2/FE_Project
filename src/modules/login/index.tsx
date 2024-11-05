import React from "react";
import logo from "../../assets/logo.png";
import { CustomButton } from "../../components/CustomButton";
export const LoginPage: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <div className="w-[65%] flex items-center justify-center bg-[#FFAA02]">
          <img src={logo} alt="Logo" className="w-[70%]" />
        </div>

        <div className="w-[35%] flex items-center justify-center p-8">
          <div className="w-[100%] ">
            <h2 className="text-6xl font-bold text-center text-gray-800 mb-6">
              Đăng Nhập
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  className="w-full px-3 py-2 border  bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-[#FFAA02]"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-[#FFAA02]"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div className="flex items-center justify-between">
                <CustomButton title="Đăng nhập"></CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
