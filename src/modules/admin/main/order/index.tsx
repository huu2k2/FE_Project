import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TitleText } from "../../../../components/texts/title";
import { OrderModel } from "../../../../models/order";
import { getOrdersByStatus } from "../../../../services/order.service";
import { paymentByOrderId } from "../../../../services/payment.service";
export const OrderCompoment: React.FC = () => {
  const [list, setList] = useState<OrderModel[]>([]);

  const fetchOrders = async () => {
    try {
      const result = await getOrdersByStatus("FAILED");
      setList(result.data);
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
      setList(result.data);
      fetchOrders();
    } catch (error) {
      console.error("Error fetching categories: ", error);
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
                  Tên danh mục
                </th>
                <th className="text-black border-b py-2 px-4 text-left">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((order, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-black border-b py-2 px-4">{index + 1}</td>
                  <td className="border-b py-2 px-4 text-black"></td>
                  <td className="border-b py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                        onClick={() => {}}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
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
