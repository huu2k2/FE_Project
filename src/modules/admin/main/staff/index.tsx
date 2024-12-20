import React, { useCallback, useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Pagination from "../../../../components/Pagination";
import { Form } from "./form";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import debounce from "lodash/debounce";
import { SearchInput } from "../../../../components/inputs/search";
import { DropDown } from "../../../../components/dropdowns/dropdows";
import { AccountModel } from "../../../../models/account";
import { RoleModel } from "../../../../models/role";
import { getAllRole } from "../../../../services/role-service";
import { getAllAccount } from "../../../../services/account-service";
export const StaffCompoment: React.FC = () => {
  const [list, setList] = useState<AccountModel[]>([]);

  const [roles, setRoles] = useState<RoleModel[]>([]);

  const fetchRoles = async () => {
    try {
      const result = await getAllRole();
      setRoles(result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAccount = async () => {
    try {
      const result = await getAllAccount();
      setList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoles();
    fetchAccount();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const totalPageNumber = 10;
  const offset = 2;

  const handlePageChange = (page: number | string) => {
    if (typeof page == "number") {
      setCurrentPageNumber(page);
    }
  };

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
    setTextSearch(value);
    debounceSearch(value);
  };

  const [isUpdate, setIsUpdate] = useState(false);

  const [data, setData] = useState<AccountModel>({
    accountId: "",
    username: "",
    password: "",
    role: {
      roleId: "",
      name: "",
    },
    isActive: false,
    profile: {
      profileId: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      cccd: "",
    },
  });

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setIsUpdate(false);
    setIsModalOpen(true);
    setData({
      accountId: "",
      username: "",
      password: "",
      role: {
        roleId: "",
        name: "",
      },
      isActive: true,
      profile: {
        profileId: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        cccd: "",
      },
    });
  };

  const handleEdit = (account: AccountModel) => {
    setIsUpdate(true);
    setIsModalOpen(true);
    setData(account);
  };

  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <TitleText name="Quản lý nhân viên" />
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <CreateButton
              name={"Tạo nhân viên"}
              handleOpenForm={handleCreate}
            />
            <DropDown
              categories={
                Array.isArray(roles) ? roles.map((item) => item.name) : []
              }
            />
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
              {list.map((account, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-black border-b py-2 px-4">
                    {account?.username}
                  </td>
                  <td className="text-black border-b py-2 px-4">
                    {account?.profile?.lastName} {account?.profile?.firstName}
                  </td>
                  <td className="text-black border-b py-2 px-4">
                    {account?.role?.name}
                  </td>
                  <td className="border-b py-2 px-4 text-black">
                    {account?.isActive ? "Hoạt dộng" : "Nghỉ"}
                  </td>
                  <td className="border-b py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                        onClick={() => handleEdit(account)}
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
      {isModalOpen && (
        <Form
          roles={roles}
          closeModal={handleModalClose}
          formData={data}
          setData={setData}
          isUpdate={isUpdate}
          fetchAccount={fetchAccount}
        />
      )}
    </>
  );
};
