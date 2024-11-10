import React from "react";
import Logo from "../../../../assets/logo.png";
import { ProductItem } from "../../../../components/customer/productItem";
import CategoryItem from "../../../../components/customer/categoryItem";

const categories = [
  { name: "Tất cả", image: "https://via.placeholder.com/150" },
  { name: "Bánh mì", image: "https://via.placeholder.com/150" },
  { name: "Hủ tiếu", image: "https://via.placeholder.com/150" },
  { name: "Phở", image: "https://via.placeholder.com/150" },
];

export const HomeComponent: React.FC = () => {
  return (
    <div className="p-4">
      {/* Search bar */}
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-20 h-20 mr-2" />
        <div className="relative w-[80%] h-[60px] ">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <i className="fa-solid fa-magnifying-glass text-gray-600"></i>
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="placeholder-gray-600 font-bold bg-transparent focus:outline-none 
            w-full h-full text-gray-600 rounded-[25px] pl-10" // Thêm padding-left để tránh chồng lên icon
            style={{ backgroundColor: "#D9D9D9", color: "000000" }}
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-[30px] text-black font-bold mb-4">Danh mục</h2>
        <div className="flex space-x-3 overflow-x-auto pt-[10px]">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>

      {/* Food items */}
      <div>
        <h2 className="text-[30px] text-black font-bold mb-4">Tất cả</h2>
        <div className="overflow-y-auto w-full h-[450px]">
          {" "}
          <div className="grid grid-cols-2 gap-4">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <ProductItem
                  key={index}
                  id="1231"
                  image="https://via.placeholder.com/150" // Replace with actual image path or dynamic data
                  title="Hủ tiếu kho"
                  price="45.000đ"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
