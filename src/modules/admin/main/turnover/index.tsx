import React from "react";
import { TitleText } from "../../../../components/texts/title";
import LineChart from "../../../../components/LineChart";
import img from "../../../../assets/product.webp";

export const TurnoverCompoment: React.FC = () => {
  const labels = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"];
  const dataPoints = [5000000, 7000000, 8000000, 6500000, 9000000];

  const dishes = [
    {
      name: "Cơm gà Hà Nội",
      orders: 200,
      imgSrc: "../../../../assets/product.webp",
    },
    { name: "Mì lạnh", orders: 150, imgSrc: "../../../../assets/product.webp" },
    {
      name: "Bún chả cá",
      orders: 100,
      imgSrc: "../../../../assets/product.webp",
    },
  ];

  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <TitleText name="Quản lý doanh thu" />
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between">
            <div className="w-[30%]">
              <h3 className="text-black">Từ ngày</h3>
              <input
                type="date"
                className="w-full px-3 py-2 border text-white bg-[#615c5c] rounded-lg focus:outline-none focus:border-backgroundColor"
              />
            </div>
            <div className="w-[30%]">
              <h3 className="text-black">Đến ngày</h3>
              <input
                type="date"
                className="w-full px-3 py-2 border text-white bg-[#615c5c] rounded-lg focus:outline-none focus:border-backgroundColor"
              />
            </div>
          </div>
          <div className="mt-8">
            <LineChart labels={labels} dataPoints={dataPoints} />
          </div>
          <div className="p-4 border rounded-lg shadow-md w-full text-black bg-white mt-8">
            <h2 className="text-lg font-semibold mb-4">Top Trending</h2>
            <div className="flex justify-between font-semibold mb-2">
              <span>Món ăn</span>
              <span>Orders</span>
            </div>
            {dishes.map((dish, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center">
                  <img
                    src={img}
                    alt={dish.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <span>{dish.name}</span>
                </div>
                <span>{dish.orders}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
