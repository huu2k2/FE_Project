import React from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div className="h-full w-full flex flex-col">
      {/* Product Image */}
      <div className="relative w-full">
        <img
          src="https://via.placeholder.com/150"
          className="rounded-lg w-full h-full"
        />
        <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          5/12
        </span>
      </div>

      {/* Product Info */}
      <div className="mt-4 flex-grow">
        {/* Rating and Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-500">
            <span className="text-lg font-bold mr-1">{3}</span>
            <span>⭐</span>
          </div>
          <span className="text-orange-600 font-semibold text-lg">
            {1299999}đ
          </span>
        </div>

        {/* Title */}
        <h2 className="text-black text-[30px] font-bold mt-2">Bún bò</h2>

        {/* Description */}
        <p className="text-black mt-2 text-lg">
          {
            "Bài viết giới thiệu sản phẩm là bài viết chứa thông tin mô tả của sản phẩm. Sao cho người đọc hiểu hết được sản phẩm đó là gì, có công dụng ra sao, sử dụng như thế nào."
          }
        </p>

        {/* Related Products */}
        <div className="mt-4">
          <h3 className="text-black font-bold mb-2 text-lg">
            Các sản phẩm liên quan
          </h3>
          <div
            className="flex overflow-x-auto gap-3 h-[100px] scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {relatedProducts.map((product, index) => (
              <div key={index} className="w-16 h-16 flex-shrink-0">
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

        {/* Add to Order Button */}
      </div>
      <button
        className="mt-4 w-full bg-[#ffaa02] text-white py-2 rounded-[15px] font-bold transition"
        onClick={() => handleAddProduct()}>
        Thêm vào đơn gọi
      </button>
    </div>
  );
};

export default ProductDetail;
