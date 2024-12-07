import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "./form";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import { SearchInput } from "../../../../components/inputs/search";
import { AccountModel } from "../../../../models/account";
import { RoleModel } from "../../../../models/role";
import { getAllRole } from "../../../../services/role.service";
import { getAllAccount } from "../../../../services/account.service";
import { toast } from "react-toastify";
export const StaffCompoment: React.FC = () => {
  const [list, setList] = useState<AccountModel[]>([]);
  const [filteredList, setFilteredList] = useState<AccountModel[]>([]);
  const [roles, setRoles] = useState<RoleModel[]>([]);

  const fetchRoles = async () => {
    try {
      const result = await getAllRole();
      setRoles(result);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const fetchAccount = async () => {
    try {
      const result = await getAllAccount();
      setList(result.data);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchRoles();
    fetchAccount();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [textSearch, setTextSearch] = useState<string>("");

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextSearch(value);
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

  useEffect(() => {
    if (textSearch.trim() === "") {
      setFilteredList(list);
    } else {
      const newFilteredList = list.filter((item) => {
        const fullName = `${item.profile.lastName} ${item.profile.firstName}`;
        return fullName.toLowerCase().includes(textSearch.toLowerCase());
      });
      setFilteredList(newFilteredList);
    }
  }, [textSearch, list]);

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
              {filteredList.map((account, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}>
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
                    {account?.isActive ? "Hoạt động" : "Nghỉ"}
                  </td>
                  <td className="border-b py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                        onClick={() => handleEdit(account)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            {/* <Pagination
              currentPageNumber={currentPageNumber}
              totalPageNumber={totalPageNumber}
              offset={offset}
              goToPage={handlePageChange}></Pagination> */}
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
