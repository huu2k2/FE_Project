import React, { useEffect, useLayoutEffect, useState } from "react";
import { ItemDrawer } from "./item";
import { useNavigate } from "react-router-dom";
import useCheffSocket from "../../../hooks/useCheffSocket";
import { handleReceiveMess, handleSendMess } from "../../../hooks/fc.socket";
import { OrderModelSocket } from "../../../models/order";
export const DrawerBar: React.FC = () => {
  const cheffSocke = useCheffSocket();

  const [orders, setOrders] = useState<
    { order: OrderModelSocket; quantity: number }[]
  >([]);

  useEffect(() => {
    if (!cheffSocke) return;

    // Get All
    handleSendMess(cheffSocke, "getAllOrdersFromCheff", "Lấy đơn gọi");

    handleReceiveMess(
      cheffSocke!,
      "sendAllOrdersFromCheff",
      (orders: OrderModelSocket[]) => {
        console.log(orders[0].orderDetails.length);
        const updatedOrders = orders.map((order) => ({
          order,
          quantity: order.orderDetails.length || 0,
        }));
        setOrders(updatedOrders);
      }
    );

    handleReceiveMess(cheffSocke, "newOrder", (mess: string) => {
      handleSendMess(cheffSocke, "getNewOrder", mess);
    });

    handleReceiveMess(
      cheffSocke,
      "showNewOrder",
      (result: OrderModelSocket) => {
        console.log(result.tableDetail.table);
        setOrders((prevOrders) => [
          ...prevOrders,
          { order: result, quantity: result.orderDetails.length || 0 },
        ]);
      }
    );

    handleReceiveMess(
      cheffSocke,
      "sendUpdateOrderQuantityForCheff",
      ({ orderId, quantity }: { orderId: string; quantity: number }) => {
        setOrders((prevOrders) =>
          prevOrders.map(
            (item) =>
              item.order.orderId === orderId
                ? { ...item, quantity: item.quantity + quantity } // Cập nhật quantity nếu orderId khớp
                : item // Giữ nguyên nếu không khớp
          )
        );
      }
    );

    handleReceiveMess(
      cheffSocke,
      "updateCancelOrderDetailsQuantity",
      ({ orderId, quantity }: { orderId: string; quantity: number }) => {
        setOrders((prevOrders) =>
          prevOrders.map(
            (item) =>
              item.order.orderId === orderId
                ? { ...item, quantity: item.quantity - quantity } // Cập nhật quantity nếu orderId khớp
                : item // Giữ nguyên nếu không khớp
          )
        );
      }
    );

    // Cleanup
    return () => {};
  }, [cheffSocke]);

  const navigate = useNavigate();
  const [position, setPosition] = useState<number>(0);

  const onClick = (index: number, orderId: string) => {
    setPosition(index);
    console.log(orderId);
    navigate(`/kitchen/order_id/${orderId}`);
    localStorage.setItem("index", index.toString());
  };

  useLayoutEffect(() => {
    const index = localStorage.getItem("index");
    if (index) {
      setPosition(parseInt(index));
    }
  }, []);

  return (
    <aside className="w-64 bg-[#FFAA02] shadow-lg p-2 max-h-screen overflow-y-auto">
      <ul>
        {orders?.map((item, index) => (
          <ItemDrawer
            index={index}
            quantity={item.quantity}
            key={index}
            isActiveItem={position === index}
            onClick={() => onClick(index, item.order.orderId)}
            order={item.order}
          />
        ))}
      </ul>
    </aside>
  );
};
