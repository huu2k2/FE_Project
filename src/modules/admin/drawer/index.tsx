import { useLayoutEffect, useState } from "react";
import { ItemDrawer } from "./item";
import { useNavigate } from "react-router-dom";

import { StaffCompoment } from "../main/staff";
import { ProductCompoment } from "../main/product";
import { TableCompoment } from "../main/table";
import { AreaCompoment } from "../main/area";
import { TurnoverCompoment } from "../main/turnover";
import { CategoryCompoment } from "../main/category";


export const DrawerBar: React.FC = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: "1",
      name: "Quản lí nhân viên",
      path: "staff",
      compoment:<StaffCompoment/>
    },
    {
      id: "2",
      name: "Quản lí món ăn",
      path: "product",
      compoment:<ProductCompoment/>
    },
    {
      id: "3",
      name: "Quản lí danh mục",
      path: "category",
      compoment:<CategoryCompoment/>
    },
    {
      id: "4",
      name: "Quản lí khu vực",
      path: "area",
      compoment:<AreaCompoment/>
    },
    {
      id: "5",
      name: "Quản lí bàn",
      path: "table",
      compoment:<TableCompoment/>
    },
    {
      id: 5,
      name: "Thống kê doanh thu",
      path: "turnover",
      compoment:<TurnoverCompoment/>
    },
  ];
  const [position, setPosition] = useState<number>(0);

  const onClick = (index: number, path: string) => {
    setPosition(index);
    navigate(`/management/${path}`);
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
            key={index}
            {...item}
            isActiveItem={position === index}
            onClick={() => onClick(index, item.path)}
          />
        ))}
      </ul>
    </aside>
  );
};
