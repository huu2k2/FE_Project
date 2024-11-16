import imageUrl from "../assets/product.webp";
import { OrderModel } from "../models/order";

interface NotificationPros {
  data: OrderModel;
}

export const HistoryOrderItem: React.FC<NotificationPros> = ({ data }) => {
  const createdAtDate = data.createdAt ? new Date(data.createdAt) : null;
  return (
    <>
      <a
        className="flex items-start p-4 border-y border-gray-300  shadow-sm max-w-md"
        href={`/order/history/${data.orderId}`}>
        <img
          src={imageUrl}
          alt="Dish"
          className="w-20 h-20 object-cover rounded-lg mr-4"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-lg text-black">
            {data.customerId}
          </h2>
          <p className="text-gray-600 line-clamp-2 ">
            {createdAtDate
              ? createdAtDate.toISOString()
              : "Ngày tạo không hợp lệ"}
          </p>
        </div>
      </a>
    </>
  );
};
