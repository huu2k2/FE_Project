import { CustomButton } from "../../../../components/CustomButton";
import image from "../../../../assets/logo.png";
import React, { useEffect, useState } from "react";
import { CustomerModel } from "../../../../models/customer";
import {
  getCustomerById,
  updateCustomer,
} from "../../../../services/customer-service";

export const ProfilePage: React.FC = () => {
  const [data, setDate] = useState<CustomerModel>({
    phoneNumber: "",
    name: "",
  });

  const [customerInfor, setCustomerInfor] = useState<CustomerModel>();

  const fetchCustomerInfor = async () => {
    try {
      // Change Id customer here
      const result = await getCustomerById(
        "2c69f714-a325-11ef-bfc1-0242ac120002"
      );
      setCustomerInfor(result);
    } catch (error) {
      console.error("Error fetching areas: ", error);
    }
  };

  useEffect(() => {
    fetchCustomerInfor();
  }, []);

  useEffect(() => {
    if (customerInfor) {
      setDate({
        phoneNumber: customerInfor.phoneNumber || "", // Fallback to empty string
        name: customerInfor.name || "", // Fallback to empty string
      });
    }
  }, [customerInfor]);

  const handleLogin = () => {
    updateCustomer("2c69f714-a325-11ef-bfc1-0242ac120002", data);
    console.log(data);
  };

  const handleChangeText = (key: keyof CustomerModel, value: string) => {
    setDate((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-backgroundColor">
      <div className="flex-col flex items-center justify-center ">
        <img src={image} alt="Logo" className="w-[100%]" />
      </div>

      <div className="flex-1  p-8 border rounded-3xl bg-gray-100">
        <div className="w-[100%] ">
          <h2 className="text-4xl font-bold text-center text-backgroundColor">
            Thông tin cá nhân
          </h2>
          <form
            className="w-full flex flex-col items-center justify-center gap-4 mt-10"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}>
            <input
              type="text"
              value={data.name}
              onChange={(e) => handleChangeText("name", e.target.value)}
              className="w-[100%] px-3 py-2 border text-black bg-gray-100 rounded-lg focus:outline-none focus:border-backgroundColor mt-4"
              placeholder="Nhập họ tên"
            />

            <input
              type="text"
              id="username"
              value={data.phoneNumber}
              onChange={(e) => handleChangeText("phoneNumber", e.target.value)}
              className="w-[100%] px-3 py-2 border text-black  bg-gray-100 rounded-lg focus:outline-none focus:border-backgroundColor"
              placeholder="Nhập số điện thoại"
            />
            <div className="mt-5 w-full">
              <CustomButton
                bgColor="#FFAA02"
                title="Cập nhật thông tin"></CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
