import { useState } from "react";
import { CategoryModel } from "../../models/category";
interface DropDownProps<T> {
  categories: T[];
  setIdCategory:React.Dispatch<React.SetStateAction<string>>,
  W:string,
}
export const DropDown=  <T extends CategoryModel> ({ categories,setIdCategory,W }: DropDownProps<T>): React.ReactElement => {
  const selectedCategoryDefault:CategoryModel = {name: "Tất cả" , categoryId: ""}
  const [selectedCategory, setSelectedCategory] = useState<CategoryModel>(selectedCategoryDefault);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOnClick = (category:CategoryModel)=>{
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    setIdCategory(category.categoryId)
  }
  return (
    <>
      <div className={`relative z-10  w-[${W}]  h-[50px] gap-4`}>
        <button
          onClick={toggleDropdown}
          className="bg-gray-300 text-black w-full px-4 py-2 rounded-lg font-bold"
          style={{ borderRadius: "25px" }}
        >
          {selectedCategory.name}
        </button>
        {isDropdownOpen && (
          <div className="absolute w-[calc(100%-16px)] h-[150px]  no-scrollbar overflow-scroll left-2 right-2 top-full mt-2 bg-gray-300 border rounded-lg shadow-lg p-2">
            <button
                
                onClick={()=>handleOnClick(selectedCategoryDefault)}
                className="block w-full py-4 text-center font-bold text-black border-b-2 border-gray-300 last:border-b-0 bg-white rounded-lg"
              >
                {selectedCategoryDefault.name}
              </button>

            {categories.map((category,index) => (
              <button
                key={index}
                onClick={()=>handleOnClick(category)}
                className="block w-full py-4 text-center font-bold text-black border-b-2 border-gray-300 last:border-b-0 bg-white rounded-lg"
              >
                {category.name}
              </button>

            ))}
          </div>
        )}
      </div>
    </>
  );
};
