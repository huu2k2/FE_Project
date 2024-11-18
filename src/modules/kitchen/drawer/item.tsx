import React from "react";
import img from "../../../assets/orderBlack.png";
import { OrderModelSocket } from "../../../models/order";

interface ItemDrawerProps {
  index: number;
  isActiveItem: boolean;
  onClick: () => void;
  order: OrderModelSocket;
}

export const ItemDrawer: React.FC<ItemDrawerProps> = ({
  index,
  isActiveItem,
  onClick,
  order,
}) => {
  return (
    <li
      key={index}
      className={`py-3 px-4 bg-white rounded-lg shadow-md mb-2 hover:shadow-lg transition-shadow duration-200  cursor-pointer`}
      onClick={onClick}>
      <div className="flex relative">
        <div
          className={`w-5 h-5 rounded-full absolute top-0 right-0 ${
            isActiveItem ? "bg-green-500" : "bg-gray-500"
          }`}></div>
        <div className="w-[30%] flex justify-center items-center">
          <img src={img} alt={`Bàn ${order.tableDetails[0].table.name}`} />
        </div>
        <div className="flex flex-col flex-1 pl-4 justify-between">
          <span className="font-bold text-lg text-black">
            {order.tableDetails[0].table.name}
          </span>
          <div className="flex justify-between text-sm text-gray-500">
            <span> món</span>
            <span>{order.updatedAt.toISOString()}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
