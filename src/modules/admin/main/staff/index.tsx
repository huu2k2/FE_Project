import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Pagination from "../../../../components/Pagination";
import { Form } from "./form";

export const StaffManagement: React.FC = () => {
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

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const totalPageNumber = 10;
  const offset = 2;

  const handlePageChange = (page: number | string) => {
    if (typeof page == "number") {
      setCurrentPageNumber(page);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-black">
            Trang chủ / Danh sách nhân viên
          </h2>
        </div>
        <div className="">
          <div className="flex items-center">
            <button
              className="bg-backgroundColor hover:bg-yellow-600 text-white py-2 px-4 rounded mr-2"
              onClick={handleModalOpen}
            >
              <i className="fa-solid fa-pen mr-2"></i>
              Tạo tài khoản
            </button>
            <div className="max-w-xs mx-auto h-full">
              <select
                id="category"
                name="category"
                className="mt-1 block h-full w-full px-3 py-2 bg-backgroundColor text-white border  rounded-md  focus:outline-none focus:border-backgroundColor "
              >
                <option value="food">Tất cả</option>
                <option value="food">Quản lí</option>
                <option value="beverage">Bếp</option>
                <option value="dessert">Phục vụ</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="bg-[#E2E2E2] border border-gray-300 rounded py-2 px-3 focus:outline-none  focus:border-backgroundColor"
              />
            </div>
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
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
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
                        onClick={handleModalOpen}
                      >
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
              goToPage={handlePageChange}
            ></Pagination>
          </div>
        </div>
      </div>
      {isModalOpen && <Form closeModal={handleModalClose} />}
    </>
  );
};
