import { CustomerHeader } from "../../../../../components/CustomerHeader";
import { HistoryOrderItem } from "../../../../../components/HistoryOrderItem";
import { useLayoutEffect, useState } from "react";
import { OrderModel } from "../../../../../models/order";
import { getAllOrdersOfCustomer } from "../../../../../services/order.service";
import { jwtDecode } from "jwt-decode";

export const ListComponent: React.FC = () => {
  const [orders, setOrders] = useState<OrderModel[]>([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token")!;
    const decoded = jwtDecode<{ customerId: string; role: { name: string } }>(
      token
    );
    const result = await getAllOrdersOfCustomer(decoded.customerId);
    setOrders(result.data);
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CustomerHeader
        isBack={true}
        title="Lịch sử đơn gọi"
        bg="white"
      ></CustomerHeader>
      <div className="flex flex-col mt-[40px]">
        {orders ? (
          orders.map((item) => (
            <HistoryOrderItem key={item.orderId} data={item}></HistoryOrderItem>
          ))
        ) : (
          <img
            src="https://img.freepik.com/premium-vector/vector-illustration-about-concept-no-items-found-no-results-found_675567-6665.jpg?semt=ais_hybrid"
            className={""}
          />
        )}
      </div>
    </>
  );
};
