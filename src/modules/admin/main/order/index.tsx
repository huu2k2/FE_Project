import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TitleText } from "../../../../components/texts/title";
import { OrderModel } from "../../../../models/order";
import { getOrdersByStatus } from "../../../../services/order.service";
import { toast } from "react-toastify";
import { paymentByOrderId } from "../../../../services/payment.service";
export const OrderCompoment: React.FC = () => {
  const [orderList, setOrderList] = useState<OrderModel[]>([]);

  const fetchOrders = async () => {
    try {
      const result = await getOrdersByStatus("FAILED");
      setOrderList(result.data);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handlePayment = async (orderId: string) => {
    try {
      const result = await paymentByOrderId(orderId);
      toast.info("Thanh toán thành công.");
      fetchOrders();
    } catch (error) {
      toast.error("Thanh toán thất bại. Lỗi hệ thống!");
      console.error("Error fetching order: ", error);
    }
  };

  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <TitleText name="Quản lý danh mục" />
        <div className="bg-white p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-black border-b py-2 px-4 text-left">STT</th>
                <th className="text-black  border-b py-2 px-4 text-left">
                  Tên bàn
                </th>
                <th className="text-black border-b py-2 px-4 text-left">
                  Tổng tiền
                </th>
                <th className="text-black border-b py-2 px-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="text-black border-b py-2 px-4">{index + 1}</td>
                  <td className="border-b py-2 px-4 text-black">
                    {order.tableDetail.table.name}
                  </td>
                  <td className="border-b py-2 px-4 text-black">
                    {order.totalAmount}
                  </td>
                  <td className="border-b py-2 px-4">
                    <div className="flex space-x-2">
                      {/* <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                        onClick={() => {}}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button> */}
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded"
                        onClick={() => handlePayment(order.orderId)}>
                        <i className="fa-solid fa-money-bill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
