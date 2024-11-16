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
}) => {
  return (
    <div
      className={`flex items-center justify-between p-2 border-b-2 border-gray-300 pb-2 ${
        selected ? "bg-gray-100" : ""
      }`}>
      {/* Select button */}
      {status === "Đang chờ xác nhận" ? (
        <button
          onClick={onSelect}
          className={`w-6 h-6 text-white rounded-full flex items-center mr-3 justify-center ${
            selected ? "bg-[#ffaa02]" : "bg-gray-300"
          }`}>
          <i className="fas fa-check"></i>
        </button>
      ) : (
        // Placeholder div giữ vị trí
        <div className="w-6 h-6 mr-3"></div>
      )}

      {/* Info */}
      <img
        src={imageSrc}
        alt={name}
        className="w-20 h-20 rounded-[18px] ml-2 mr-5"
      />
      <div className="flex-1 ml-2">
        <h3 className="text-[20px] font-bold text-black">{name}</h3>
        <p
          className={`text-sm font-medium ${
            status === "Đã huỷ"
              ? "text-red-500"
              : status === "Đã hoàn thành"
              ? "text-green-500"
              : status === "Đang nấu"
              ? "text-[#ffdd33]"
              : "text-gray-500"
          }`}>
          {status}
        </p>
        <div className="flex items-center mt-1">
          <p className="text-black font-bold mr-2">{quantity}</p>
          <p className="text-[#ffaa02] font-bold text-[18px] pl-[50%]">
            {price.toLocaleString()}đ
          </p>
        </div>
      </div>
    </div>
  );
};
