import React from "react";
import img from "../../../assets/orderBlack.png";

export const DrawerBar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#FFAA02] shadow-lg p-2 max-h-screen overflow-y-auto">
      <ul>
        {[...Array(10)].map((_, index) => (
          <li
            key={index}
            className="py-3 px-4 bg-white rounded-lg shadow-md mb-2 hover:shadow-lg transition-shadow duration-200  cursor-pointer"
          >
            <div className="flex">
              <div className="w-[30%] flex justify-center items-center">
                <img src={img} alt={`Bàn A0${index + 1}`} />
              </div>
              <div className="flex flex-col flex-1 pl-4 justify-between">
                <span className="font-bold text-lg text-black">
                  Bàn A0{index + 1}
                </span>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>3 món</span>
                  <span>19:12 pm</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};
