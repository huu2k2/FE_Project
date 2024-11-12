import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { CustomButton } from "../../components/CustomButton";
import { ConfirmModel } from "../../models/confirm";
export const LoginPage: React.FC = () => {
  const [data, setDate] = useState<ConfirmModel>({
    phoneNumber: "",
    fullName: "",
  });

  const handleLogin = () => {
    console.log("login:", data);
  };

  const handleChangeText = (key: keyof ConfirmModel, value: string) => {
    setDate((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

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
                className="w-[100%] px-3 py-2 border  bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập số điện thoại"
                value={data?.phoneNumber}
                onChange={(e) =>
                  handleChangeText("phoneNumber", e.target.value)
                }
              />

              <input
                type="password"
                id="password"
                className="w-[100%] px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập họ tên"
                value={data?.fullName}
                onChange={(e) => handleChangeText("fullName", e.target.value)}
              />

              <CustomButton
                bgColor="#FFAA02"
                title="Xác nhận"
                onClick={handleLogin}
              ></CustomButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
