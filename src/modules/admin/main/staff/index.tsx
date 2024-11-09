import React, { useCallback, useState } from "react";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import { DropDown } from "../../../../components/dropdowns/dropdows";
import { SearchInput } from "../../../../components/inputs/search";

import debounce from "lodash/debounce";
import { AddForm } from "./addForm";

const categories = ["Quản lý", "Phục vụ", "Bếp"];
export const StaffCompoment: React.FC = () => {
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
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <TitleText name="Quản lý nhân viên" />
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <CreateButton
              name={"Tạo tài khoản"}
              handleOpenForm={handleOpenForm}
            />
            {isFormOpen && <AddForm onClose={handleCloseForm} />}

            {/* Drop down */}
            <DropDown categories={categories} />
            <SearchInput handleSearch={handleChangeText} value={textSearch} />
          </div>
        </div>
      </div>
    </>
  );
};
