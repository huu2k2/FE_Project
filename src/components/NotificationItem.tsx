import imageUrl from "../assets/product.webp";
import { NotificationModel } from "../models/notification";

interface NotificationPros {
  data: NotificationModel;
}

export const NotificationItem: React.FC<NotificationPros> = ({ data }) => {
  return (
    <>
      <div className="flex items-start p-4 border-y border-gray-300 rounded-lg shadow-sm max-w-md">
        <img
          src={imageUrl}
          alt="Dish"
          className="w-20 h-20 object-cover rounded-lg mr-4"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-lg text-black">{data.content}</h2>
          <p className="text-gray-600 line-clamp-2 h-[46px]">{data.content}</p>
          <p className="text-gray-400 text-[12px] mt-2 float-end">
            //! change following to created date
            {data.type}
          </p>
        </div>
      </div>
    </>
  );
};
