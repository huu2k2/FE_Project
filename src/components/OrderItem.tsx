import { CustomCheckbox } from "./CustomCheckbox";

interface OrderItemProps {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
  status: string;
  isActive: boolean;
  onToggle: () => void;
}

export const OrderItem: React.FC<OrderItemProps> = ({
  id,
  img,
  name,
  price,
  quantity,
  status,
  isActive,
  onToggle,
}) => {
  return (
    <div
      className="flex items-center bg-white shadow-md rounded-lg p-1 w-full h-24 px-5 border-2 border-gray-300"
      onClick={onToggle}>
      <div className="w-10">
        <CustomCheckbox isAllActive={isActive} />
      </div>
      <div className="flex flex-1 items-center">
        <div className="w-24 flex justify-center">
          <img src={img} alt={name} className="rounded-lg" />
        </div>
        <div className="flex flex-1 ml-4 flex-col justify-between h-full">
          <div className="flex-grow">
            <span className="font-bold text-lg text-black">{name}</span>
          </div>
          <div className="flex-grow">
            <span className="text-sm text-[#FFAA02] font-semibold">
              {price.toLocaleString()}đ
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-black font-bold">
              Số lượng: {quantity}
            </span>
            <span
              className={`text-sm font-bold ${
                status === "PENDING"
                  ? "text-gray-500" // Grey color for PENDING
                  : status === "CONFIRMED"
                  ? "text-green-500" // Green color for CONFIRMED
                  : "text-red-500" // Default to red color (you can replace this as needed)
              }`}>
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
