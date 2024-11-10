import React from "react";
import logo from "../../assets/logo.png";
import { CustomButton } from "../../components/CustomButton";
export const LoginPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-backgroundColor">
        <div className="h-[50%] flex-col flex items-center justify-center ">
          <img src={logo} alt="Logo" className="w-[100%]" />
          <h3 className="text-4xl text-white my-12">PTITHCM</h3>
        </div>

        <div className="flex-1  p-8 border rounded-lg bg-gray-100">
          <div className="w-[100%] ">
            <h2 className="text-6xl font-bold text-center text-gray-800 mb-6">
              Xác thực
            </h2>
            <form className="w-full flex flex-col items-center justify-center gap-4">
              <input
                type="text"
                id="username"
                className="w-[100%] px-3 py-2 border  bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập số điện thoại"
              />

              <input
                type="password"
                id="password"
                className="w-[100%] px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập họ tên"
              />

              <CustomButton bgColor="#FFAA02" title="Xác nhận"></CustomButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
