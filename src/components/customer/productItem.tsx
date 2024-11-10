import React from "react";

interface ProductItemProps {
  image: string;
  id: string;
  title: string;
  price: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  image,
  id,
  title,
  price,
}) => {
  return (
    <a
      className="bg-[#fff5e0] rounded-[30px] shadow-sm flex flex-col items-center text-center"
      href={`/product/${id}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-[160px] object-cover rounded-[30px] mb-2"
      />
      <div className="flex justify-between items-center w-full px-4">
        <div className="text-left">
          <h3 className="text-black text-[15px] font-bold mb-2">{title}</h3>
          <p className="text-[#ffaa00] font-semibold mb-2">{price}</p>
        </div>
        <div className="pt-[18px]">
          <button className="w-8 h-8 bg-backgroundColor rounded-full text-white flex items-center justify-center">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </a>
  );
};
