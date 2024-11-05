import React, { useLayoutEffect, useState } from "react";
import { ItemDrawer } from "./item";
import { useNavigate } from "react-router-dom";
export const DrawerBar: React.FC = () => {
  const navigate = useNavigate();
  const data = [
    {
      nameTable: "A01",
      numberOfOrder: 3,
      time: "19:12 pm",
      orderId: "1234567890",
    },
    {
      nameTable: "A02",
      numberOfOrder: 2,
      time: "19:12 pm",
      orderId: "1234567891",
    },
    {
      nameTable: "A03",
      numberOfOrder: 1,
      time: "19:12 pm",
      orderId: "1234567892",
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
        {data.map((item, index) => (
          <ItemDrawer
            index={index}
            key={index}
            {...item}
            isActiveItem={position === index}
            onClick={() => onClick(index, item.orderId)}
          />
        ))}
      </ul>
    </aside>
  );
};
