import React, { useEffect, useLayoutEffect, useState } from "react";
import { ItemDrawer } from "./item";
import { useNavigate } from "react-router-dom";
import useCheffSocket from "../../../hooks/useCheffSocket";
import { handleReceiveMess, handleSendMess } from "../../../hooks/fc.socket";
import { OrderModelSocket } from "../../../models/order";
export const DrawerBar: React.FC = () => {
  const cheffSocke = useCheffSocket();

  const [orders, setOrders] = useState<OrderModelSocket[]>();

  useEffect(() => {
    if (!cheffSocke) return;
    // Get All
    handleSendMess(cheffSocke, "getAllOrders", "Lấy đơn gọi");

    handleReceiveMess(
      cheffSocke!,
      "sendAllOrders",
      (mess: OrderModelSocket[]) => {
        console.log(mess);
        setOrders(mess);
      }
    );

    handleReceiveMess(cheffSocke, "newOrder", (mess: any) => {
      console.log(mess);

      handleSendMess(cheffSocke, "getNewOrder", mess);
    });

    // Cleanup
    return () => {
      cheffSocke.off("getOrders");
    };
  }, [cheffSocke]);

  const navigate = useNavigate();
  const data = [
    {
      nameTable: "A01",
      numberOfOrder: 3,
      time: "19:12 pm",
      orderId: "1234567890",
    },
  ];
  const [position, setPosition] = useState<number>(0);

  const onClick = (index: number, orderId: string) => {
    setPosition(index);
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
            key={index}
            isActiveItem={position === index}
            onClick={() => onClick(index, item.orderId)}
            order={item}
          />
        ))}
      </ul>
    </aside>
  );
};
