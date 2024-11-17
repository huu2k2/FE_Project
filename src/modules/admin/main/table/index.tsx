import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import { SearchInput } from "../../../../components/inputs/search";
import { TableItem } from "../../../../components/TableItem";
import { Form } from "./form";
import { TableModel } from "../../../../models/table";
import { getAllTable } from "../../../../services/table-service";

export const TableCompoment: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [tableList, setTableList] = useState<TableModel[]>([]);
  const fetchTables = async () => {
    try {
      const result = await getAllTable();
      setTableList(result.data);
    } catch (error) {
      console.error("Error fetching areas: ", error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

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

  // handle call api search text
  // console.log(debouncedText);

  const [isUpdate, setIsUpdate] = useState(false);

  const [data, setData] = useState({
    tableId: "",
    name: "",
    status: "",
    areaId: "",
  });

  const handleCreate = () => {
    handleOpenForm();
    setIsUpdate(false);
    setData({ tableId: "", name: "", status: "", areaId: "" });
  };

  const handleEdit = (
    idTable: string,
    nameTable: string,
    status: string,
    tableArea: string
  ) => {
    handleOpenForm();
    setIsUpdate(true);
    setData({
      tableId: idTable,
      name: nameTable,
      status: status,
      areaId: tableArea,
    });
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
          {tableList.map((table, index) => (
            <TableItem
              key={index}
              table={{
                tableId: table.tableId,
                name: table.name,
                status: table.status,
                areaId: table.areaId,
              }}
              handleEdit={() =>
                handleEdit(
                  table.tableId,
                  table.name,
                  table.status,
                  table.areaId
                )
              }
              fetchData={() => fetchTables()}></TableItem>
          ))}
        </div>
      </div>

      {isFormOpen && (
        <Form
          closeModal={handleCloseForm}
          formData={data}
          setData={setData}
          isUpdate={isUpdate}
          fetchData={fetchTables}
        />
      )}
    </div>
  );
};
