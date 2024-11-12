import { useState } from "react";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { FinishOrderItem } from "../../../../components/FinishOrderItem";

export const Payment: React.FC = () => {
  const data = [
    {
      id: "asd",
      name: "Món đã xác nhận",
      price: 2,
      quantity: 2,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },

    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
  ];

  const [paymentMethod, setPaymentMethod] = useState("Tiền mặt");

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    const tableInfo = {
      id: "01", // giả định thông tin bàn
      name: "Bàn O1",
      area: "Khu vực A",
    };
    console.log("Thông tin bàn:", tableInfo);
    console.log("Hình thức thanh toán:", paymentMethod);
  };

  return (
    <>
      <CustomerHeader
        isBack={true}
        title="Bàn A02 - 27/10/2024"
        bg="white"></CustomerHeader>
      <div className="flex flex-1 flex-col mt-4">
        {data.map((item, index) => (
          <FinishOrderItem key={index} data={item}></FinishOrderItem>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg pt-4">
        <div className="flex items-center justify-between mb-4 mx-4">
          <p className="text-backgroundColor text-2xl font-bold">
            Loại thanh toán:
          </p>
          <select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="flex-1 ml-4 p-2 rounded-lg bg-backgroundColor text-white">
            <option>Tiền mặt</option>
            <option>Chuyển khoản</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex-1 bg-backgroundColor text-white text-1xl p-4 rounded-l-md text-start h-full">
            Tổng tiền: 27000đ
          </div>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-[#FFAA02] opacity-70 text-white text-1xl p-4 rounded-r-md hover:opacity-100 
          hover:bg-backgroundColor transition">
            Gửi yêu cầu
          </button>
        </div>
      </div>
    </>
  );
};
