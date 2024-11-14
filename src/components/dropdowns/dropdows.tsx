import { useState } from "react";

interface DropDownProps {
  categories: string[];
}
export const DropDown: React.FC<DropDownProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="relative z-10 w-[296px] h-[50px] gap-4">
        <button
          onClick={toggleDropdown}
          className="bg-gray-300 text-black w-full px-4 py-2 rounded-lg font-bold"
          style={{ borderRadius: "25px" }}
        >
          {selectedCategory}
        </button>
        {isDropdownOpen && (
          <div className="absolute w-[calc(100%-16px)] left-2 right-2 top-full mt-2 bg-gray-300 border rounded-lg shadow-lg p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsDropdownOpen(false);
                }}
                className="block w-full py-4 text-center font-bold text-black border-b-2 border-gray-300 last:border-b-0 bg-white rounded-lg"
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
