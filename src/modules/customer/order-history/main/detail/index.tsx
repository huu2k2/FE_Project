import { useEffect, useState } from "react";
import { CustomerHeader } from "../../../../../components/CustomerHeader";
import { FinishOrderItem } from "../../../../../components/FinishOrderItem";
import { OrderDetailModel } from "../../../../../models/orderdetail";
import { getOrderDetailByOrderId } from "../../../../../services/order-detail.service";
import { useParams } from "react-router-dom";

export const DetailComponent: React.FC = () => {
  const [detailOrders, setDetailOrders] = useState<OrderDetailModel[]>([]);
  const { orderId } = useParams<{ orderId: string }>();

  const fetchData = async () => {
    if (!orderId) {
      console.error("Order ID is undefined!");
      return;
    }

    try {
      const result = await getOrderDetailByOrderId(orderId);
      if (Array.isArray(result.data)) {
        setDetailOrders(result.data);
      } else {
        console.error("Unexpected response format. Expected an array.");
      }
    } catch (error) {
      console.error("Error fetching order details: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CustomerHeader
        isBack={true}
        title="Bàn A02 - 27/10/2024"
      ></CustomerHeader>
      <div className="flex flex-col mt-[40px]">
        {detailOrders.map((item) => (
          <FinishOrderItem data={item} key={item.orderId}></FinishOrderItem>
        ))}
      </div>
    </>
  );
};
