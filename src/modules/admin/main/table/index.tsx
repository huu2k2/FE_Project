import React, { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import { SearchInput } from "../../../../components/inputs/search";
import { TableItem } from "../../../../components/TableItem";
import { Form } from "./form";
import { TableModel } from "../../../../models/table";

const tables: TableModel[] = Array(8).fill({
  id: "tb5143541243534",
  name: "Bàn 12",
  status: "empty",
  area: "Khu vực A",
});

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
    setTextSearch(value);
    debounceSearch(value);
  };

  console.log(debouncedText);

  const [isUpdate, setIsUpdate] = useState(false);

  const [data, setData] = useState({ id: "", name: "", area: "" });

  const handleCreate = () => {
    handleOpenForm();
    setIsUpdate(false);
    setData({ id: "", name: "", area: "" });
  };

  const handleEdit = (
    idTable: string,
    nameTable: string,
    tableArea: string
  ) => {
    handleOpenForm();
    setIsUpdate(true);
    setData({ id: idTable, name: nameTable, area: tableArea });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <TitleText name="Quản lý bàn" />
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <CreateButton name={"Thêm bàn mới"} handleOpenForm={handleCreate} />
          <SearchInput handleSearch={handleChangeText} value={textSearch} />
        </div>

        {/* Items */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tables.map((table, index) => (
            <TableItem
              key={index}
              table={{
                id: table.id,
                name: table.name,
                status: table.status,
                area: table.area,
              }}
              handleEdit={() => handleEdit(table.id, table.name, table.area)}
            ></TableItem>
          ))}
        </div>
      </div>

      {isFormOpen && (
        <Form
          closeModal={handleCloseForm}
          formData={data}
          setData={setData}
          isUpdate={isUpdate}
        />
      )}
    </div>
  );
};
