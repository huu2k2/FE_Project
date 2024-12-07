import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "./form";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import { SearchInput } from "../../../../components/inputs/search";
import { CategoryModel } from "../../../../models/category";
import { DeleteModal } from "../../../../components/DeleteModal";
import {
  deleteCategory,
  getAllCategory,
} from "../../../../services/category.service";
export const CategoryCompoment: React.FC = () => {
  const [list, setList] = useState<CategoryModel[]>([]);
  const [filteredList, setFilteredList] = useState<CategoryModel[]>([]);

  const fetchCategories = async () => {
    try {
      const result = await getAllCategory();
      setList(result.data);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isState, setIsState] = useState(0);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsState(0);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const [textSearch, setTextSearch] = useState<string>("");

  const [data, setData] = useState<CategoryModel>({ categoryId: "", name: "" });

  const handleEdit = (data: CategoryModel) => {
    handleModalOpen();
    setIsState(1);
    setData(data);
  };

  const handleCreate = () => {
    handleModalOpen();
    setIsState(2);
    setData({ categoryId: "", name: "" });
  };

  const clickDelete = (data: CategoryModel) => {
    handleModalOpen();
    setIsState(3);
    setData(data);
  };

  const handleDelete = async (data: CategoryModel) => {
    await deleteCategory(data.categoryId as string);
    fetchCategories();
    handleModalClose();
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextSearch(value);
  };

  useEffect(() => {
    if (textSearch.trim() === "") {
      setFilteredList(list);
    } else {
      const newFilteredList = list.filter((item) =>
        item.name.toLowerCase().includes(textSearch.toLowerCase())
      );
      setFilteredList(newFilteredList);
    }
  }, [textSearch, list]);

  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <TitleText name="Quản lý danh mục" />
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <CreateButton
              name={"Tạo danh mục"}
              handleOpenForm={() => handleCreate()}
            />
            <SearchInput handleSearch={handleChangeText} value={textSearch} />
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-black border-b py-2 px-4 text-left">
                  STT
                </th>
                <th className="text-black  border-b py-2 px-4 text-left">
                  Tên danh mục
                </th>
                <th className="text-black border-b py-2 px-4 text-left">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((category, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-black border-b py-2 px-4">{index + 1}</td>
                  <td className="border-b py-2 px-4 text-black">
                    {category.name}
                  </td>
                  <td className="border-b py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                        onClick={() => handleEdit(category)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                        onClick={() => clickDelete(category)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="flex justify-end mt-4">
            <Pagination
              currentPageNumber={currentPageNumber}
              totalPageNumber={totalPageNumber}
              offset={offset}
              goToPage={handlePageChange}
            ></Pagination>
          </div> */}
        </div>
      </div>
      {isModalOpen && isState != 0 && isState != 3 && (
        <Form
          closeModal={handleModalClose}
          formData={{
            name: data.name,
            categoryId: data.categoryId!,
          }}
          setData={setData}
          isState={isState}
          fetchData={fetchCategories}
        />
      )}

      {isModalOpen && isState == 3 && (
        <DeleteModal
          title="Bạn chắc chắn xoá danh mục này"
          closeModel={handleModalClose}
          handle={() => {
            handleDelete(data);
          }}
        ></DeleteModal>
      )}
    </>
  );
};
