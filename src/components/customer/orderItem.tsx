import React from "react";

interface FoodOrderProps {
  name: string;
  price: number;
  imageSrc: string;
  selected: boolean;
  onSelect: () => void;
  quantity: number;
  onQuantityChange: (amount: number) => void;
}

export const OrderItem: React.FC<FoodOrderProps> = ({
  name,
  price,
  imageSrc,
  selected,
  onSelect,
  quantity,
  onQuantityChange,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-2 border-b-2 border-gray-300 pb-2 ${
        selected ? "bg-gray-100" : ""
      }`}>
      {/* Select button */}
      <button
        onClick={onSelect}
        className={`w-6 h-6 text-white rounded-full flex items-center mr-3 justify-center ${
          selected ? "bg-[#ffaa02]" : "bg-gray-300"
        }`}>
        <i className="fas fa-check"></i>
      </button>

      {/* Info */}
      <img
        src={imageSrc}
        alt={name}
        className="w-20 h-20 rounded-[18px] ml-2 mr-5"
      />
      <div className="flex-1 ml-2">
        <h3 className="text-[20px] font-bold text-black">{name}</h3>
        <p className="text-[#ffaa02] font-bold">{price.toLocaleString()}đ</p>

        {/* Change quantity button */}
        <div className="flex items-center">
          <button
            className="w-6 h-6 bg-backgroundColor rounded-full text-white flex items-center justify-center"
            onClick={() => onQuantityChange(-1)}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <span className="mx-2 text-black font-bold">{quantity}</span>
          <button
            className="w-6 h-6 bg-backgroundColor rounded-full text-white flex items-center justify-center"
            onClick={() => onQuantityChange(1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
