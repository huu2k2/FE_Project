import React from "react";

interface CategoryItemProps {
  image: string;
  name: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center text-center text-gray-600 min-w-[100px] rounded-[20px] h-full">
      <div className="w-16 h-16 bg-gray-100  rounded-[20px] flex items-center justify-center ">
        <img src={image} alt={name} className="w-full h-full rounded-[20px]" />
      </div>
      <span className="text-[20px]">{name}</span>
    </div>
  );
};

export default CategoryItem;
