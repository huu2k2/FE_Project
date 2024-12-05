import { Link } from "react-router-dom";
import imageUrl from "../assets/product.webp";
import { OrderModel } from "../models/order";

interface NotificationPros {
  data: OrderModel;
}

export const HistoryOrderItem: React.FC<NotificationPros> = ({ data }) => {
  const createdAtDate = data.createdAt ? new Date(data.createdAt) : null;
  return (
    <>
      <Link
        className="flex items-start p-4 border-y border-gray-300  shadow-sm max-w-md"
        to={`/order/history/${data.orderId}`}
      >
        <img
          src={imageUrl}
          alt="Dish"
          className="w-20 h-20 object-cover rounded-lg mr-4"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-lg text-black">
            Tổng: {data.totalAmount.toLocaleString()} đ
          </h2>
          <p
            className={`${
              data.status.toString() === "SUCCESS" ? "text-green-700" : "text-red-800"
            } font-bold`}
          >
            {data.status}
          </p>
          <p className="text-gray-600 line-clamp-2 ">
            {createdAtDate
              ? createdAtDate.toLocaleString()
              : "Ngày tạo không hợp lệ"}
          </p>
        </div>
      </Link>
    </>
  );
};
