import imageUrl from "../assets/product.webp";

interface NotificationPros {
  data: {
    content: string;
    status: string;
    createdAt: string;
  };
}
function formatDateTime(isoString: string): string {
  const date = new Date(isoString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${day}/${month}/${year}, ${hours}h${minutes}m${seconds}s`;
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
          <p className={`text-gray-600 line-clamp-2 h-[46px] font-bold ${data.status === "UNREAD" ? "text-red-600" : "text-green-800"}`}>{data.status}</p>
          <p className="text-gray-400 text-[12px] mt-2 float-end">
            {formatDateTime(data.createdAt)}
          </p>
        </div>
      </div>
    </>
  );
};
