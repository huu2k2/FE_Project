import { useEffect, useState } from "react";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { FinishOrderItem } from "../../../../components/FinishOrderItem";
import { createPayment } from "../../../../services/payment-service";
import { getOrderDetailByOrderId } from "../../../../services/order-service";
import { OrderDetailModel } from "../../../../models/orderDetail";

export const Payment: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetailModel[]>([]);

  const fetchData = async () => {
    try {
      const orderId = "18e10579-a324-11ef-8e57-0242ac130002";
      const result = await getOrderDetailByOrderId(orderId);
      setOrderDetails(result.data);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalAmount = orderDetails.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [paymentMethod, setPaymentMethod] = useState("Tiền mặt");

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async () => {
    let result = await createPayment("18e10579-a324-11ef-8e57-0242ac130002", {
      method: paymentMethod,
      total: totalAmount,
    });
    console.log(result);
  };

  return (
    <>
      <CustomerHeader
        isBack={true}
        title="Bàn A02 - 27/10/2024"
        bg="white"></CustomerHeader>
      <div className="flex flex-1 flex-col mt-4">
        {orderDetails.map((item, index) => (
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
            Tổng tiền: {totalAmount.toLocaleString()}đ
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
