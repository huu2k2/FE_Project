import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomButton } from "../../../../components/CustomButton";
import { CustomerHeader } from "../../../../components/CustomerHeader";

const relatedProducts = [
  { image: "https://via.placeholder.com/50", name: "Súp" },
  { image: "https://via.placeholder.com/50", name: "Bánh mì" },
  { image: "https://via.placeholder.com/50", name: "Hủ tiếu" },
  { image: "https://via.placeholder.com/50", name: "Phở" },
  { image: "https://via.placeholder.com/50", name: "Phở" },
  { image: "https://via.placeholder.com/50", name: "Phở" },
  { image: "https://via.placeholder.com/50", name: "Phở" },
  { image: "https://via.placeholder.com/50", name: "Phở" },
  { image: "https://via.placeholder.com/50", name: "Phở" },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const handleAddProduct = () => {
    console.log(`Add product ${id} to cart`);
  };
  const navigate = useNavigate();
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
            {1299999}đ
          </span>
        </div>

        <h2 className="text-black text-[30px] font-bold mt-2">Bún bò</h2>

        <p className="text-black mt-2 text-lg">
          {
            "Bài viết giới thiệu sản phẩm là bài viết chứa thông tin mô tả của sản phẩm. Sao cho người đọc hiểu hết được sản phẩm đó là gì, có công dụng ra sao, sử dụng như thế nào."
          }
        </p>

        <div className="mt-4">
          <h3 className="text-black font-bold mb-2 text-lg">
            Các sản phẩm liên quan
          </h3>
          <div
            className="flex overflow-x-auto gap-3 h-[100px] scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {relatedProducts.map((product, index) => (
              <a
                key={index}
                className="w-16 h-16 flex-shrink-0"
                href={`/product/${id}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg border"
                />
                <p className="text-xs text-center mt-1">{product.name}</p>
              </a>
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
