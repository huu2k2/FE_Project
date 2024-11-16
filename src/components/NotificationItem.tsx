import imageUrl from "../assets/product.webp";

interface NotificationPros {
  data: {
    title: string;
    description: string;
    timestamp: string;
  };
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
          <h2 className="font-semibold text-lg text-black">{data.title}</h2>
          <p className="text-gray-600 line-clamp-2 h-[46px]">
            {data.description}
          </p>
          <p className="text-gray-400 text-[12px] mt-2 float-end">
            {data.timestamp}
          </p>
        </div>
      </div>
    </>
  );
};
