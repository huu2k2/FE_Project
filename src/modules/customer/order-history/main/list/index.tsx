import { CustomerHeader } from "../../../../../components/CustomerHeader";
import { HistoryOrderItem } from "../../../../../components/HistoryOrderItem";
import { useEffect, useState } from "react";
import { OrderModel } from "../../../../../models/order";
import { getAllOrders } from "../../../../../services/order-service";

export const ListComponent: React.FC = () => {
  const [orders, setOrders] = useState<OrderModel[]>([]);

  const fetchData = async () => {
    try {
      const result = await getAllOrders();
      console.log(result.data);
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
