import React from "react";
import { ProductModel } from "../../models/product";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/addTotalContext";

interface ProductItemProps {
  data: ProductModel;
}

export const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  const context = useCart();
  const handleAddProduct = (
    e: React.MouseEvent<HTMLButtonElement>,
    data: ProductModel
  ) => {
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex(
      (item: { id: string }) => item.id === data.productId
    );

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({
        id: data.productId,
        imageSrc: data.image,
        name: data.name,
        price: data.price,
        quantity: 1,
      });
    }

    context.setSum(context.sum + 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <Link
        className="bg-[#fff5e0] rounded-[30px] shadow-sm flex flex-col items-center text-center"
        to={`/product/${data.productId}`}
      >
        <img
          src={data.image}
          className="w-full h-[160px] object-cover rounded-[30px] mb-2"
        />
        <div className="flex justify-between items-center w-full px-4">
          <div className="text-left">
            <h3 className="text-black text-[15px] font-bold mb-2">
              {data.name}
            </h3>
            <p className="text-[#ffaa00] font-semibold mb-2">
              {new Intl.NumberFormat("vi-VN").format(data.price)} đ
            </p>
          </div>
          <div className="pt-[18px]">
            <button
              className="w-8 h-8 bg-backgroundColor rounded-full text-white flex items-center justify-center"
              onClick={(e: any) => handleAddProduct(e, data)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};
