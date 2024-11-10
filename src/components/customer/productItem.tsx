import React from "react";

interface ProductItemProps {
  image: string;
  title: string;
  price: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  image,
  title,
  price,
}) => {
  return (
    <button className="bg-[#ffeecd] rounded-[30px] shadow-sm flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-[160px] object-cover rounded-[30px] mb-2"
      />
      <div className="flex justify-between items-center w-full px-4">
        <div className="text-left">
          <h3 className="text-black text-[22px] font-bold mb-2">{title}</h3>
          <p className="text-[#ffaa02] font-semibold mb-2">{price}</p>
        </div>
        <div className="pt-[18px]">
          <button className="w-8 h-8 bg-backgroundColor rounded-full text-white flex items-center justify-center">
            +
          </button>
        </div>
      </div>
    </button>
  );
};
