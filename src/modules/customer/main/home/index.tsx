import React, { useEffect, useState } from "react";
import Logo from "../../../../assets/logo.png";
import { ProductItem } from "../../../../components/customer/productItem";
import CategoryItem from "../../../../components/customer/categoryItem";
import { getAllCategory } from "../../../../services/category-service";
import { CategoryModel } from "../../../../models/category";
import { ProductModel } from "../../../../models/product";
import { getProductByCategoryId } from "../../../../services/product-service";

export const HomeComponent: React.FC = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [products, setProduct] = useState<ProductModel[]>([]);
  const [category, setCategory] = useState<CategoryModel>({
    categoryId: undefined,
    name: "Tất cả",
  });

  const fetchCategories = async () => {
    try {
      const result = await getAllCategory();
      setCategories(result.data);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };

  const fetchProducts = async (categoryId: string) => {
    try {
      const result = await getProductByCategoryId(categoryId);
      setProduct(result.data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (category.categoryId) {
      fetchProducts(category.categoryId);
    }
  }, [category]);

  return (
    <div className="px-4 pt-4 min-h-screen overscroll-none">
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
            w-full h-full text-gray-600 rounded-[25px] pl-10"
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
          <CategoryItem
            key={0}
            data={{ categoryId: "all", name: "Tất cả" }}
            handleSelected={setCategory}
          />
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              data={category}
              handleSelected={setCategory}
            />
          ))}
        </div>
      </div>

      <div className="h-full mb-20">
        <h2 className="text-[30px] text-black font-bold mb-4">
          {category.name}
        </h2>
        <div
          className="overflow-y-auto w-full h-[528px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {" "}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <ProductItem key={index} data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
