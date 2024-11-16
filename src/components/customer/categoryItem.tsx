import React from "react";
import { CategoryModel } from "../../models/category";

interface CategoryItemProps {
  data: CategoryModel;
  handleSelected: (data: CategoryModel) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  data,
  handleSelected,
}) => {
  return (
    <div className="flex flex-col items-center text-center text-gray-600  rounded-[20px] h-full mx-2">
      <button
        className="w-20 h-20 bg-gray-100  rounded-[20px] flex items-center justify-center "
        onClick={() => handleSelected(data)}
      >
        <img
          src="https://via.placeholder.com/150"
          className="w-full h-full rounded-[20px]"
        />
      </button>
      <span className="text-[20px]">{data.name}</span>
    </div>
  );
};

export default CategoryItem;
