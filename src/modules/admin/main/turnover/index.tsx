import React, { useState } from "react";
import { TitleText } from "../../../../components/texts/title";
import LineChart from "../../../../components/LineChart";
import img from "../../../../assets/product.webp";
import { CustomButton } from "../../../../components/CustomButton";
import { getTurnOver } from "../../../../services/order-service";
import { format, eachDayOfInterval } from "date-fns";

export const TurnoverCompoment: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const [labels, setLabels] = useState<string[]>([]);
  const [chartData, setChartData] = useState<number[]>([]);

  const [dishes, setDishes] = useState<
    {
      name: string;
      orders: number;
      imgSrc: string;
    }[]
  >([]);

  const handleSearch = async () => {
    const result = await getTurnOver(startDate, endDate);
    console.log(result.data);
    const formattedLabels = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    }).map((date) => format(date, "dd/MM/yyyy"));
    setLabels(formattedLabels);
    const totalAmountsByDay = formattedLabels.map((label) => {
      const dayStart = new Date(label);
      const dayEnd = new Date(dayStart);
      dayEnd.setDate(dayEnd.getDate() + 1);
      const totalAmountForDay = result.data
        .filter((order) => {
          const createdAt = new Date(order.createdAt);
          return createdAt >= dayStart && createdAt < dayEnd;
        })
        .reduce((sum, order) => sum + order.totalAmount, 0);

      return totalAmountForDay;
    });
    setChartData(totalAmountsByDay);

    const dishCount: { [key: string]: number } = {};
    result.data.forEach((order) => {
      order.orderDetails.forEach((orderDetail) => {
        const dishName = orderDetail.product?.name!;
        const dishQuantity = orderDetail.quantity!;
        const dishImage = orderDetail.product?.image!;
        if (dishCount[dishName]) {
          dishCount[dishName] += dishQuantity;
        } else {
          dishCount[dishName] = dishQuantity;
        }
      });
    });

    const dishArray = Object.keys(dishCount).map((dishName) => ({
      name: dishName,
      orders: dishCount[dishName],
      imgSrc:
        result.data
          .find((order) =>
            order.orderDetails.some(
              (detail) => detail.product?.name === dishName
            )
          )
          ?.orderDetails.find((detail) => detail.product?.name === dishName)
          ?.product?.image || "../../../../assets/product.webp",
    }));

    setDishes(dishArray);
  };

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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border text-white bg-[#615c5c] rounded-lg focus:outline-none focus:border-backgroundColor"
              />
            </div>
            <div className="w-[30%]">
              <h3 className="text-black">Đến ngày</h3>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border text-white bg-[#615c5c] rounded-lg focus:outline-none focus:border-backgroundColor"
              />
            </div>
            <div className="w-[30%]">
              <h3 className="text-black">Tìm kiếm</h3>
              <div>
                <CustomButton
                  title="Xác nhận"
                  bgColor="#FFAA02"
                  onClick={handleSearch}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <LineChart labels={labels} dataPoints={chartData} />
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
                className="flex items-center justify-between py-2">
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
