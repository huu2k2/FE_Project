import { CustomButton } from "../../../../../components/CustomButton";
import { TitleText } from "../../../../../components/texts/title";
import { AccountModel } from "../../../../../models/account";
import set from "lodash/set";
import { RoleModel } from "../../../../../models/role";
import {
  createAccount,
  updateAccount,
} from "../../../../../services/account-service";
import { toast } from "react-toastify";
import { useState } from "react";

interface FormPros {
  closeModal: () => void;
  formData: AccountModel;
  setData: (value: AccountModel) => void;
  isUpdate: boolean;
  roles: RoleModel[];
  fetchAccount: () => void;
}
export const Form: React.FC<FormPros> = ({
  closeModal,
  formData,
  setData,
  isUpdate,
  roles,
  fetchAccount,
}: FormPros) => {
  const [reapeatPassword, setReapeatPassword] = useState<string>("");
  const handleChangeData = (value: string, path: string) => {
    const updatedData = { ...formData };

    if (path === "isActive") {
      if (value === "Hoạt động") {
        set(updatedData, path, true);
      } else {
        set(updatedData, path, false);
      }
    } else {
      set(updatedData, path, value);
    }

    setData(updatedData);
  };

  const handleSave = async () => {
    if (!formData.username.trim()) {
      toast.error("Username không được để trống!");
      return;
    }

    if (!formData.profile.firstName.trim()) {
      toast.error("Họ không được để trống!");
      return;
    }

    if (!formData.profile.lastName.trim()) {
      toast.error("Tên không được để trống!");
      return;
    }

    if (!formData.profile.address.trim()) {
      toast.error("Địa chỉ không được để trống!");
      return;
    }

    if (!formData.profile.cccd.trim()) {
      toast.error("CCCD không được để trống!");
      return;
    }

    if (!formData.profile.phoneNumber.trim()) {
      toast.error("Số điện thoại không được để trống!");
      return;
    }

    if (!formData.password.trim()) {
      toast.error("Mật khẩu không được để trống!");
      return;
    }

    if (!formData.role.roleId.trim()) {
      toast.error("Vui lòng chọn quyền!");
      return;
    }

    if (reapeatPassword !== formData.password) {
      toast.error("Vui lòng nhập đúng mật khẩu!");
      return;
    }

    if (isUpdate) {
      // console.log("update", formData);
      try {
        let result = await updateAccount(formData);
        console.log(result);
      } catch (error: any) {
        toast.error(error.message);
      }
    } else {
      // console.log("create", formData);
      try {
        let result = await createAccount(formData);
        console.log(result);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
    fetchAccount();
    closeModal();
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 ">
        <div className="bg-white p-6 rounded-lg  shadow-lg w-[1533px] flex flex-col justify-between gap-16">
          <div>
            <TitleText name="Thông tin cá nhân" />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Họ :</h5>
                <input
                  type="text"
                  id="lastName"
                  value={formData.profile.lastName}
                  onChange={(e) =>
                    handleChangeData(e.target.value, "profile.lastName")
                  }
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập họ"
                />
              </div>

              {!isUpdate && (
                <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                  <h5 className="text-lg font-bold text-black">
                    Tên đăng nhập:
                  </h5>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={(e) =>
                      handleChangeData(e.target.value, "username")
                    }
                    className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                    placeholder="Nhập tên đăng nhập"
                  />
                </div>
              )}

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Tên :</h5>
                <input
                  type="text"
                  id="ten"
                  value={formData.profile.firstName}
                  onChange={(e) =>
                    handleChangeData(e.target.value, "profile.firstName")
                  }
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập tên"
                />
              </div>

              {!isUpdate && (
                <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                  <h5 className="text-lg font-bold text-black">Mật khẩu :</h5>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) =>
                      handleChangeData(e.target.value, "password")
                    }
                    className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
              )}

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Địa chỉ :</h5>
                <input
                  type="text"
                  id="address"
                  value={formData.profile.address}
                  onChange={(e) =>
                    handleChangeData(e.target.value, "profile.address")
                  }
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập địa chỉ"
                />
              </div>

              {!isUpdate && (
                <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                  <h5 className="text-lg font-bold text-black">Nhập lại :</h5>
                  <input
                    type="password"
                    // value={formData.confirmPassport}
                    onChange={(e) =>
                      // handleChangeData("confirmPassport", e.target.value)
                      setReapeatPassword(e.target.value)
                    }
                    className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>
              )}

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">SĐT :</h5>
                <input
                  type="text"
                  id="phone"
                  value={formData.profile.phoneNumber}
                  onChange={(e) =>
                    handleChangeData(e.target.value, "profile.phoneNumber")
                  }
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Chức vụ :</h5>
                <select
                  id="role"
                  value={formData.role.roleId}
                  onChange={(e) =>
                    handleChangeData(e.target.value, "role.roleId")
                  }
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor">
                  <option value="" disabled>
                    Chọn chức vụ
                  </option>
                  {roles.map((role) => (
                    <option key={role.roleId} value={role.roleId}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Trạng thái:</h5>
                <select
                  id="role"
                  value={formData.isActive ? "Hoạt động" : "Nghỉ"}
                  onChange={(e) => {
                    handleChangeData(e.target.value, "isActive");
                  }}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor">
                  <option value="Hoạt động">Hoạt động</option>
                  <option value="Nghỉ">Nghỉ</option>
                </select>
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">CCCD :</h5>
                <input
                  type="text"
                  id="CCCD"
                  value={formData.profile.cccd}
                  onChange={(e) =>
                    handleChangeData(e.target.value, "profile.cccd")
                  }
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập CCCD"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 w-full">
            <CustomButton
              title="Tạo nhân viên"
              bgColor="#FFAA02"
              onClick={handleSave}></CustomButton>
            <CustomButton
              title="Huỷ"
              bgColor="#CC0E0E"
              onClick={closeModal}></CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};
