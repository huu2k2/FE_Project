import React, { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import { SearchInput } from "../../../../components/inputs/search";

export const TableCompoment: React.FC = () => {
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
      <TitleText name="Quản lý bàn" />
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <CreateButton name={"Thêm bàn mới"} handleOpenForm={handleOpenForm} />
          {/* {isFormOpen && <AddForm onClose={handleCloseForm} />} */}
          <SearchInput handleSearch={handleChangeText} value={textSearch} />
        </div>

        {/* Items */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          
        </div>
      </div>
    </div>
  );
};
