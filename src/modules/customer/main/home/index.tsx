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

const products = [
  {
    id: "1231",
    image: "https://via.placeholder.com/150",
    title: "Hủ tiếu kho",
    price: "45.000đ",
  },
  {
    id: "123425231",
    image: "https://via.placeholder.com/150",
    title: "Bò kho",
    price: "45.000đ",
  },
  {
    id: "127944331",
    image: "https://via.placeholder.com/150",
    title: "Cá lóc nướng",
    price: "45.000đ",
  },
  {
    id: "122223431",
    image: "https://via.placeholder.com/150",
    title: "Mỳ ý sốt bò",
    price: "45.000đ",
  },
  {
    id: "23423424",
    image: "https://via.placeholder.com/150",
    title: "Cơm sườn bò",
    price: "45.000đ",
  },
  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },
  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },
  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },
  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },
  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },

  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },
  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },
  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },
  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },
  {
    id: "23028374924",
    image: "https://via.placeholder.com/150",
    title: "Beefsteak",
    price: "45.000đ",
  },
];

export const HomeComponent: React.FC = () => {
  return (
    <div className="px-4 pt-4 min-h-screen">
      <div className="flex items-center">
        <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
          <img src={Logo} alt="logo" className="w-20 h-20 mr-2" />
        </label>
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

      <div>
        <h2 className="text-[30px] text-black font-bold mb-4">Danh mục</h2>
        <div
          className="flex  overflow-x-auto  scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>

      <div className="h-full">
        <h2 className="text-[30px] text-black font-bold mb-4">Tất cả</h2>
        <div
          className="overflow-y-auto w-full h-[528px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {" "}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <ProductItem
                key={index}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
