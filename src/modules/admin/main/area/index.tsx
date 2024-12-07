import React, { useMemo, useEffect } from "react";
import { useCallback, useState } from "react";
import { Form } from "./form/index";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { AreaItem } from "../../../../components/AreaItem";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import { SearchInput } from "../../../../components/inputs/search";
import { getAllArea } from "../../../../services/area.service";

import debounce from "lodash/debounce";
import { AreaModel } from "../../../../models/area";

export const AreaCompoment: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>("");
  const [debouncedText, setDebouncedText] = useState<string>("");
  const [areaList, setAreaList] = useState<AreaModel[]>([]);

  const fetchAreas = async () => {
    try {
      const result = await getAllArea();
      setAreaList(result.data);
    } catch (error) {
      console.error("Error fetching areas: ", error);
    }
  };

  const filteredAreaList = useMemo(() => {
    if (!debouncedText) return areaList;
    return areaList.filter((area: { name: string }) =>
      area.name.toLowerCase().includes(debouncedText.toLowerCase())
    );
  }, [areaList, debouncedText]);

  useEffect(() => {
    fetchAreas();
  }, []);

  const debounceSearch = useCallback(
    debounce((value: string) => {
      setDebouncedText(value);
    }, 500),
    []
  );

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextSearch(value);
    debounceSearch(value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isUpdate, setIsUpdate] = useState(false);

  const [data, setData] = useState({ areaId: "", name: "" });

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Just Set values
  const handleCreate = () => {
    handleModalOpen();
    setIsUpdate(false);
    setData({ areaId: "", name: "" });
  };

  const handleEdit = (idArea: string, nameArea: string) => {
    handleModalOpen();
    setIsUpdate(true);
    setData({ areaId: idArea, name: nameArea });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <TitleText name="Quản lý khu vực" />
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <CreateButton
            name={"Tạo khu vực"}
            handleOpenForm={() => handleCreate()}
          />
          <span className="text-black font-bold" style={{ fontSize: "20px" }}>
            Tổng số khu vực: {areaList.length}
          </span>

          <SearchInput handleSearch={handleChangeText} value={textSearch} />
        </div>

        {/* Items */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAreaList.map((area, index) => (
            <AreaItem
              key={index}
              area={{
                id: area.areaId,
                name: area.name,
              }}
              handleEdit={() => handleEdit(area.areaId, area.name)}
              fetchData={() => fetchAreas()}></AreaItem>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <Form
          closeModal={handleModalClose}
          formData={data}
          setData={setData}
          isUpdate={isUpdate}
          fetchData={fetchAreas}
        />
      )}
    </div>
  );
};
