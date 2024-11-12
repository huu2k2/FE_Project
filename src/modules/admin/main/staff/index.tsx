import React, { useCallback, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Pagination from "../../../../components/Pagination";
import { Form } from "./form";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import debounce from "lodash/debounce";
import { SearchInput } from "../../../../components/inputs/search";
import { DropDown } from "../../../../components/dropdowns/dropdows";
export const StaffCompoment: React.FC = () => {
  const userData = [
    {
      username: "Trieu123",
      type: "Bui Quoc Trieu",
      role: "Nhan vien",
      status: "Active",
    },
    {
      username: "Trieu123",
      type: "Bui Quoc Trieu",
      role: "Nhan vien",
      status: "Active",
    },
    {
      username: "Trieu123",
      type: "Bui Quoc Trieu",
      role: "Nhan vien",
      status: "Active",
    },
    {
      username: "Trieu123",
      type: "Bui Quoc Trieu",
      role: "Nhan vien",
      status: "Active",
    },
  ];
  const categories = ["Tất cả", "Quản lý", "Nhân viên", "Bếp"];
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const totalPageNumber = 10;
  const offset = 2;

  const handlePageChange = (page: number | string) => {
    if (typeof page == "number") {
      setCurrentPageNumber(page);
    }
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };

  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);
  const [textSearch, setTextSearch] = useState<string>("");
  const [debouncedText, setDebouncedText] = useState<string>("");

  const debounceSearch = useCallback(
    debounce((value: string) => {
      setDebouncedText(value);
    }, 500),
    []
  );

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextSearch(value); // Immediate update for input field
    debounceSearch(value); // Update `debouncedText` after delay
  };
  // handle call api search text

  const [isUpdate, setIsUpdate] = useState(false);

  const [data, setData] = useState({
    ho: "",
    ten: "",
    username: "",
    password: "",
    address: "",
    phone: "",
    role: "",
    CCCD: "",
  });

  const handleCreate = () => {
    handleOpenForm();
    setIsUpdate(false);
    setData({
      ho: "",
      ten: "",
      username: "",
      password: "",
      address: "",
      phone: "",
      role: "",
      CCCD: "",
    });
  };

  const handleEdit = (
    ho: string,
    ten: string,
    username: string,
    password: string,
    addres: string,
    phone: string,
    role: string,
    CCCD: string
  ) => {
    handleOpenForm();
    setIsUpdate(true);
    setData({
      ho: ho,
      ten: ten,
      username: username,
      password: password,
      address: addres,
      phone: phone,
      role: role,
      CCCD: CCCD,
    });
  };

  console.log(debouncedText);
  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <TitleText name="Quản lý món ăn" />
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <CreateButton
              name={"Tạo nhân viên"}
              handleOpenForm={handleCreate}
            />
            <DropDown categories={categories} />
            <SearchInput handleSearch={handleChangeText} value={textSearch} />
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-black border-b py-2 px-4 text-left">
                  Tên tài khoản
                </th>
                <th className="text-black  border-b py-2 px-4 text-left">
                  Tên nhân viên
                </th>
                <th className="text-black border-b py-2 px-4 text-left">
                  Chức vụ
                </th>
                <th className="text-black border-b py-2 px-4 text-left">
                  Trạng thái
                </th>
                <th className="text-black border-b py-2 px-4 text-left">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="text-black border-b py-2 px-4">
                    {user.username}
                  </td>
                  <td className="text-black border-b py-2 px-4">{user.type}</td>
                  <td className="text-black border-b py-2 px-4">
                    {user.role === "Quan li" ? "Phục vụ" : user.role}
                  </td>
                  <td className="border-b py-2 px-4 text-black">
                    {user.status}
                  </td>
                  <td className="border-b py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                        onClick={() =>
                          handleEdit(
                            "ho",
                            "ten",
                            user.username,
                            "password",
                            "addres",
                            "phone",
                            user.role,
                            "CCCD"
                          )
                        }>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <Pagination
              currentPageNumber={currentPageNumber}
              totalPageNumber={totalPageNumber}
              offset={offset}
              goToPage={handlePageChange}></Pagination>
          </div>
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
    </>
  );
};
