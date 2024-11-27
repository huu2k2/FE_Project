import { CustomerHeader } from "../../../../../components/CustomerHeader";
import { HistoryOrderItem } from "../../../../../components/HistoryOrderItem";
import { useEffect, useState } from "react";
import { OrderModel } from "../../../../../models/order";
import { getAllOrdersOfCustomer } from "../../../../../services/order-service";
import { jwtDecode } from "jwt-decode";

export const ListComponent: React.FC = () => {
  const [orders, setOrders] = useState<OrderModel[]>([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token")!;
      const decoded = jwtDecode<{ customerId: string; role: { name: string } }>(
        token
      );
      const result = await getAllOrdersOfCustomer(decoded.customerId);
      setOrders(result.data);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CustomerHeader
        isBack={true}
        title="Lịch sử đơn gọi"
        bg="white"></CustomerHeader>
      <div className="flex flex-col mt-[40px]">
        {orders.map((item) => (
          <HistoryOrderItem key={item.orderId} data={item}></HistoryOrderItem>
        ))}
      </div>
    </>
  );
};
