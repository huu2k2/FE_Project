import React, { useMemo } from "react";
import { CategoryModel } from "../../models/category";
import Avatar from "react-initials-avatar";

interface CategoryItemProps {
  data: CategoryModel;
  handleSelected: (data: CategoryModel) => void;
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
  data,
  handleSelected,
}) => {
  const randomColor = useMemo(() => getRandomColor(), [data]);

  return (
    <div className="flex flex-col items-center text-center text-gray-600 rounded-[20px] h-full mx-2">
      <button
        className="w-20 h-20 rounded-[20px] flex items-center justify-center text-black bg-white font-bold"
        onClick={() => handleSelected(data)}
        style={{
          backgroundColor: data.name !== "Tất cả" ? randomColor : undefined,
        }}
      >
        <Avatar name={data.name.toUpperCase()} />
      </button>
      <span className="text-[20px] truncate w-20">{data.name}</span>
    </div>
  );
};

export default CategoryItem;
