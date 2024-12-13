import React, { useEffect, useLayoutEffect, useState } from "react";
import { ItemDrawer } from "./item";
import { useNavigate } from "react-router-dom";
import { handleReceiveMess, handleSendMess } from "../../../hooks/fc.socket";
import { OrderModelSocket } from "../../../models/order";
import { getSocket } from "../../../hooks/useCheffSocket";
import { toast } from "react-toastify";
export const DrawerBar: React.FC = () => {
  const [orders, setOrders] = useState<
    { order: OrderModelSocket; quantity: number }[]
  >([]);

  useEffect(() => {
    const cheffSocke = getSocket();
    if (!cheffSocke) return;

    // console.log(cheffSocke);

    // Get All
    handleSendMess(cheffSocke, "getAllOrdersFromCheff", "Lấy đơn gọi");

    handleReceiveMess(
      cheffSocke!,
      "sendAllOrdersFromCheff",
      (orders: OrderModelSocket[]) => {
        // console.log(orders);
        const updatedOrders = orders.map((order) => {
          const validDetailsCount = order.orderDetails.filter(
            (detail) =>
              detail.status === "PENDING" || detail.status === "CONFIRMED"
          );
          let quantity = 0;
          validDetailsCount.forEach((item) => {
            quantity += item.quantity!;
          });

          return {
            order,
            quantity: quantity, // Số lượng chi tiết 'PENDING' hoặc 'CONFIRMED'
          };
        });
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
        // Đếm số lượng các chi tiết có trạng thái 'PENDING' hoặc 'CONFIRMED'
        const validDetailsCount = result.orderDetails.filter(
          (detail) =>
            detail.status === "PENDING" || detail.status === "CONFIRMED"
        );

        let quantity = 0;
        validDetailsCount.forEach((item) => {
          quantity += item.quantity!;
        });

        setOrders((prevOrders) => {
          const orderExists = prevOrders.some(
            (order) => order.order.orderId === result.orderId
          );

          if (orderExists) {
            return prevOrders;
          }

          return [...prevOrders, { order: result, quantity: quantity }];
        });
      }
    );

    handleReceiveMess(
      cheffSocke,
      "sendUpdateOrderQuantityForCheff",
      ({ orderId, quantity }: { orderId: string; quantity: number }) => {
        setOrders((prevOrders) =>
          prevOrders.map((item) =>
            item.order.orderId === orderId
              ? { ...item, quantity: quantity }
              : item
          )
        );
      }
    );

    handleReceiveMess(
      cheffSocke,
      "getUpdateOrdersQuantityFromCheff",
      (value: { orderId: string; quantity: number; updateType: number }) => {
        console.log(value);
        setOrders((prevOrders) =>
          prevOrders.map((item) =>
            item.order.orderId === value.orderId
              ? {
                  ...item,
                  quantity: value.quantity,
                }
              : item
          )
        );
      }
    );

    handleReceiveMess(
      cheffSocke,
      "updateCancelOrderDetailsQuantity",
      ({ orderId, quantity }: { orderId: string; quantity: number }) => {
        setOrders((prevOrders) =>
          prevOrders.map((item) =>
            item.order.orderId === orderId
              ? { ...item, quantity: quantity }
              : item
          )
        );
      }
    );

    // Cleanup
    return () => {};
  }, []);

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
