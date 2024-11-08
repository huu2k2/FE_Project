import React, { useLayoutEffect, useState } from "react";
import { ItemDrawer } from "./item";
import { useNavigate } from "react-router-dom";
export const DrawerBar: React.FC = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: "staff",
      name: "Quản lí nhân viên",
    },
    {
      id: "product",
      name: "Quản lí món ăn",
    },
  ];
  const [position, setPosition] = useState<number>(0);
  const onClick = (index: number, id: string) => {
    setPosition(index);
    navigate(`/management/${id}`);
    // localStorage.setItem("index", index.toString());
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
            key={index}
            {...item}
            isActiveItem={position === index}
            onClick={() => onClick(index, item.id)}
          />
        ))}
      </ul>
    </aside>
  );
};
