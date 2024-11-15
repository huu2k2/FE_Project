import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomButton } from "../../../../components/CustomButton";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { ProductModel } from "../../../../models/product";
import {
  getProductById,
  getRandProduct,
} from "../../../../services/product-service";
import { addToCart } from "../../../../services/cart-service";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const handleAddProduct = () => {
    addToCart({
      id: product!.productId,
      name: product!.name,
      price: product!.price,
      quantity: 1,
      imageSrc: product!.image,
    });
    navigate("/home");
  };

  const navigate = useNavigate();

  const fetchData = async (id: string) => {
    try {
      let result = await getProductById(id);
      setProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRelatedProducts = async () => {
    try {
      let result = await getRandProduct();
      setRelatedProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [relatedProducts, setRelatedProducts] = useState<ProductModel[]>([]);
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    fetchData(id!);
    fetchRelatedProducts();
  }, [id]);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <CustomerHeader isBack={true} title="" bg="transparent"></CustomerHeader>
      <div className="w-full">
        <img
          src="https://via.placeholder.com/150"
          className="rounded-lg w-full h-full"
        />
      </div>

      <div className="mt-4 flex-grow mx-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-500 bg-backgroundColor rounded-3xl p-2 ">
            <span className="mr-1">⭐</span>
            <span className="mr-1">⭐</span>
            <span className="mr-1">⭐</span>
            <span className="mr-1">⭐</span>
            <span className="mr-1">⭐</span>
            <span className="text-lg font-bold text-white">{5}.0</span>
          </div>
          <span className="text-backgroundColor font-bold text-lg">
            {product?.price}đ
          </span>
        </div>

        <h2 className="text-black text-[30px] font-bold mt-2">
          {product?.name}
        </h2>

        <p className="text-black mt-2 text-lg">{product?.description}</p>

        <div className="mt-4">
          <h3 className="text-black font-bold mb-2 text-lg">
            Các sản phẩm liên quan
          </h3>
          <div
            className="flex overflow-x-auto gap-3 h-[100px] scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {relatedProducts.map((product, index) => (
              <div
                key={index}
                className="w-16 h-16 flex-shrink-0"
                onClick={() => navigate(`/product/${product.productId}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg border"
                />
                <p className="text-xs text-center mt-1">{product.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[30px]">
          <CustomButton
            bgColor="#ffaa02"
            title="Thêm vào đơn gọi"
            onClick={() => handleAddProduct()}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
