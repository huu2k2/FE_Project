import React from "react";
import logo from "../../assets/logo.png";
import { CustomButton } from "../../components/CustomButton";
export const LoginPage: React.FC = () => {
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
            <form className="w-full flex flex-col items-center justify-center gap-4">
              <input
                type="text"
                id="username"
                className="w-[90%]  lg:w-[70%] px-3 py-2 border  bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập tên đăng nhập"
              />

              <input
                type="password"
                id="password"
                className="w-[90%]  lg:w-[70%]  px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập mật khẩu"
              />

              <div className="flex items-center justify-between w-[90%]">
                <CustomButton
                  bgColor="#FFAA02"
                  title="Đăng nhập"
                ></CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
