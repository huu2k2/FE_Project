import React, { useState } from "react";
import { AddForm } from "./addForm";
import "@fortawesome/fontawesome-free/css/all.min.css";

type Product = {
  name: string;
  price: string;
  type: string;
};
const categories = ["Tất cả", "Mì", "Cơm", "Hải sản"];

const products: Product[] = Array(6).fill({
  name: "Phở Gà Hà Nội",
  price: "30.000 vnđ",
  type: "Phở",
});

export const ProductManagement: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1
        className="text-lg text-black font-bold mb-4 w-[261] h-[50px]"
        style={{ fontSize: "25px" }}>
        Quản lý món ăn
      </h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleOpenForm}
            className="bg-backgroundColor text-white px-4 py-2 rounded-lg font-semibold">
            ➕ Tạo món ăn
          </button>
          {isFormOpen && <AddForm onClose={handleCloseForm} />}
          <span className="text-black font-bold" style={{ fontSize: "20px" }}>
            Tổng các món ăn: {products.length}
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm ...."
            className="bg-gray-300 px-4 py-2 w-[318px] font-bold h-[50px] text-lg text-black placeholder-black"
            style={{ borderRadius: "25px" }}
          />

          {/* Drop down */}
          <div className="relative z-10 w-[296px] h-[50px] gap-4">
            <button
              onClick={toggleDropdown}
              className="bg-gray-300 text-black w-full px-4 py-2 rounded-lg font-bold"
              style={{ borderRadius: "25px" }}>
              {selectedCategory}
            </button>
            {isDropdownOpen && (
              <div className="absolute w-[calc(100%-16px)] left-2 right-2 top-full mt-2 bg-gray-300 border rounded-lg shadow-lg p-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false); // Close dropdown after selection
                    }}
                    className="block w-full py-4 text-center font-bold text-black border-b-2 border-gray-300 last:border-b-0 bg-white rounded-lg">
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Items */}
        {/* Tách Item ra để custom (thg nào làm đi chứ t chịu) */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                {/* Fix size here */}
                <div className="absolute w-[43px] h-[21px] right-0 top-0">
                  <button className="w-full h-full">
                    <i
                      className="fa-solid fa-ellipsis fa-2xl"
                      style={{ color: "#000000" }}></i>
                  </button>
                </div>
                <img
                  src="https://via.placeholder.com/150" // Replace with actual image source
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-4 bg-backgroundColor text-white">
                <h2 className="text-md font-bold text-black">{product.name}</h2>
                <div className="flex space-x-2">
                  <p className="font-bold text-black">Giá:</p>
                  <p>{product.price}</p>
                </div>
                <div className="flex space-x-2">
                  <p className="font-bold text-black">Loại:</p>
                  <p>{product.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
