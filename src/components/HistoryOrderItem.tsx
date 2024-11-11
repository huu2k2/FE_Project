import imageUrl from "../assets/product.webp";

interface NotificationPros {
  data: {
    id: string;
    title: string;
    description: string;
  };
}

export const HistoryOrderItem: React.FC<NotificationPros> = ({ data }) => {
  return (
    <>
      <a
        className="flex items-start p-4 border-y border-gray-300  shadow-sm max-w-md"
        href={`/order/history/${data.id}`}
      >
        <img
          src={imageUrl}
          alt="Dish"
          className="w-20 h-20 object-cover rounded-lg mr-4"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-lg text-black">{data.title}</h2>
          <p className="text-gray-600 line-clamp-2 ">{data.description}</p>
        </div>
      </a>
    </>
  );
};
