import React from "react";

interface FoodOrderProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
  status: string;
  selected: boolean;
  onSelect: () => void;
  onQuantityChange: (val: number) => void;
}

export const OrderStatusItem: React.FC<FoodOrderProps> = ({
  id,
  name,
  price,
  imageSrc,
  status,
  quantity,
  selected,
  onSelect,
  onQuantityChange,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-2 border-b-2 border-gray-300 pb-2 ${
        selected ? "bg-gray-100" : ""
      }`}
    >
      {status === "PENDING" ? (
        <button
          onClick={onSelect}
          className={`w-6 h-6 text-white rounded-full flex items-center mr-3 justify-center ${
            selected ? "bg-[#ffaa02]" : "bg-gray-300"
          }`}
        >
          <i className="fas fa-check"></i>
        </button>
      ) : (
        <div className="w-6 h-6 mr-3"></div>
      )}
      <img
        src={imageSrc}
        alt={name}
        className="w-20 h-20 rounded-[18px] ml-2 mr-5"
      />
      <div className="flex-1 ml-2">
        <h3 className="text-[20px] font-bold text-black">{name}</h3>
        <p
          className={`text-sm font-medium ${
            status === "CANCELED"
              ? "text-red-500"
              : status === "COMPLETED"
              ? "text-green-500"
              : status === "CONFIRMED"
              ? "text-[#ffdd33]"
              : "text-gray-500"
          }`}
        >
          {status}
        </p>
        <div className="flex items-center mt-1 justify-between">
          <div className="flex items-center">
            {status === "PENDING" && (
              <button
                className="w-6 h-6 bg-backgroundColor rounded-full text-white flex items-center justify-center"
                onClick={() => onQuantityChange(-1)}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            )}

            <span className="mx-2 text-black font-bold">{quantity}</span>

            {status === "PENDING" && (
              <button
                className="w-6 h-6 bg-backgroundColor rounded-full text-white flex items-center justify-center"
                onClick={() => onQuantityChange(1)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            )}
          </div>
          <p className="text-[#ffaa02] font-bold text-[18px] ">{price}đ</p>
        </div>
      </div>
    </div>
  );
};
