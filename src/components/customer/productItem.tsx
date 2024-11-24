import React from "react";
import { ProductModel } from "../../models/product";
import { addToCart } from "../../services/cart-service";

interface ProductItemProps {
  data: ProductModel;
}

export const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  const handlerClickBtnPlus =(e:any, data:any)=>{
    e.preventDefault()
    addToCart({
      id: data!.productId,
      name: data!.name,
      price: data!.price,
      quantity: 1,
      imageSrc: data!.image,
    });
  }
  return (
    <div>
    <a
      className="bg-[#fff5e0] rounded-[30px] shadow-sm flex flex-col items-center text-center"
      href={`/product/${data.productId}`}
    >
      <img
        src={data.image}
        className="w-full h-[160px] object-cover rounded-[30px] mb-2"
      />
     
    </a>
    <div className="flex justify-between items-center w-full px-4">
        <div className="text-left">
          <h3 className="text-black text-[15px] font-bold mb-2">{data.name}</h3>
          <p className="text-[#ffaa00] font-semibold mb-2">{data.price}</p>
        </div>
        <div className="pt-[18px]">
          <button className="w-8 h-8 bg-backgroundColor rounded-full text-white flex items-center justify-center" onClick={(e)=>handlerClickBtnPlus(e,data)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
