import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { CustomButton } from "../../components/CustomButton";
import { ConfirmModel } from "../../models/confirm";
import { createCustomer } from "../../services/customer.service";
import { createTableDetail } from "../../services/table.service";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCustomerSocket,
  initializeCustomerSocket,
} from "../../hooks/useCustomerSocket";
import { handleSendMess } from "../../hooks/fc.socket";
import { toast } from "react-toastify";
import { useLoading } from "../../hooks/loading";
export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { tableId } = useParams();
  const [data, setDate] = useState<ConfirmModel>({
    phoneNumber: "",
    fullName: "",
  });

  const { isLoading, setIsLoading } = useLoading();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const socket = initializeCustomerSocket();
      return () => {
        socket.disconnect();
      };
    }, 1000);
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    let check = false;
    if (!data.fullName.trim()) {
      toast.error("Vui lòng nhập tên!");
      check = true;
    }
    if (!data.phoneNumber.trim()) {
      toast.error("Vui lòng nhập số điện thoại!");
      check = true;
    }

    if (check) {
      return;
    }

    try {
      const resultCustomer = await createCustomer({
        name: data.fullName,
        phoneNumber: data.phoneNumber,
      });

      if (resultCustomer.data) {
        localStorage.setItem("token", resultCustomer.data.token);
      } else {
        console.log("Customer created successfully:", resultCustomer.data);
      }

      const resultDetailTable = await createTableDetail(tableId as string);

      if (!resultDetailTable.data) {
        toast.error(resultDetailTable.message);
      } else {
        localStorage.setItem("orderId", resultDetailTable.data.order.orderId);

        const orderId = localStorage.getItem("orderId");
        const customerSocke = getCustomerSocket();

        localStorage.setItem('tableId', tableId?.toString() || '')

        toast.success("Hi! Wellcome to website!");
        handleSendMess(customerSocke!, "sendOrder", orderId);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error creating customer: ", error);
    }
  };

  const handleChangeText = (key: keyof ConfirmModel, value: string) => {
    setDate((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      {!isLoading && (
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
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <input
                  type="text"
                  id="phoneNumber"
                  className="w-[100%] px-3 py-2 border  bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập số điện thoại"
                  value={data?.phoneNumber}
                  onChange={(e) =>
                    handleChangeText("phoneNumber", e.target.value)
                  }
                />

                <input
                  type="text"
                  id="fullName"
                  className="w-[100%] px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập họ tên"
                  value={data?.fullName}
                  onChange={(e) => handleChangeText("fullName", e.target.value)}
                />

                <CustomButton
                  bgColor="#FFAA02"
                  title="Xác nhận"
                  onClick={handleLogin}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
