import { useCallback, useState } from "react";
import { AddForm } from "./addForm";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { ProductItem } from "../../../../components/ProductItem";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import { SearchInput } from "../../../../components/inputs/search";

import debounce from "lodash/debounce";
import { DropDown } from "../../../../components/dropdowns/dropdows";

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

export const ProductCompoment: React.FC = () => {
 
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);
  // ====================
  const [textSearch, setTextSearch] = useState<string>("");
  const [debouncedText, setDebouncedText] = useState<string>("");

  // Define a debounced function
  const debounceSearch = useCallback(
    debounce((value: string) => {
      setDebouncedText(value); // Update only after debounce delay
    }, 500), // Adjust delay as needed (500ms here)
    []
  );

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextSearch(value); // Immediate update for input field
    debounceSearch(value); // Update `debouncedText` after delay
  };
  // handle call api search text
  console.log(debouncedText);
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <TitleText name="Quản lý món ăn" />
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <CreateButton name={"Tạo món ăn"} handleOpenForm={handleOpenForm} />
          {isFormOpen && <AddForm onClose={handleCloseForm} />}
          <span className="text-black font-bold" style={{ fontSize: "20px" }}>
            Tổng các món ăn: {products.length}
          </span>

          <SearchInput handleSearch={handleChangeText} value={textSearch} />

          {/* Drop down */}
          <DropDown categories={categories}/>
        </div>

        {/* Items */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductItem
              key={index}
              product={{
                name: product.name,
                price: product.price,
                type: product.price,
              }}
            ></ProductItem>
          ))}
        </div>
      </div>
    </div>
  );
};
