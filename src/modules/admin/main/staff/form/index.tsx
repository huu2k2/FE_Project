import { CustomButton } from "../../../../../components/CustomButton";
import { TitleText } from "../../../../../components/texts/title";
import { AccountModel } from "../../../../../models/account";
import set from "lodash/set";
import { RoleModel } from "../../../../../models/role";
import { createAccount, updateAccount } from "../../../../../services/account.service";
import { toast } from "react-toastify";
import { useState } from "react";

interface FormProps {
  closeModal: () => void;
  formData: AccountModel;
  setData: (value: AccountModel) => void;
  isUpdate: boolean;
  roles: RoleModel[];
  fetchAccount: () => void;
}

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) => (
  <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
    <h5 className="text-lg font-bold text-black">{label}</h5>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
      placeholder={placeholder}
    />
  </div>
);

const SelectField = ({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) => (
  <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
    <h5 className="text-lg font-bold text-black">{label}</h5>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export const Form: React.FC<FormProps> = ({
  closeModal,
  formData,
  setData,
  isUpdate,
  roles,
  fetchAccount,
}) => {
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const handleChangeData = (value: string, path: string) => {
    const updatedData = { ...formData };
    set(updatedData, path, path === "isActive" ? value === "Hoạt động" : value);
    setData(updatedData);
  };

  const handleSave = async () => {
    const requiredFields = [
      { value: formData?.username, message: "Username không được để trống!" },
      { value: formData?.profile?.firstName, message: "Họ không được để trống!" },
      { value: formData?.profile?.lastName, message: "Tên không được để trống!" },
      { value: formData?.profile?.address, message: "Địa chỉ không được để trống!" },
      { value: formData?.profile?.cccd, message: "CCCD không được để trống!" },
      { value: formData?.profile?.phoneNumber, message: "Số điện thoại không được để trống!" },
      { value: formData?.role.roleId, message: "Vui lòng chọn quyền!" },
      ...(isUpdate ? [] : [{ value: formData.password, message: "Mật khẩu không được để trống!" }]),
    ];

    for (const field of requiredFields) {
      if (!field.value.trim()) {
        toast.error(field.message);
        return;
      }
    }

    if (!isUpdate && repeatPassword !== formData.password) {
      toast.error("Vui lòng nhập đúng mật khẩu!");
      return;
    }

    try {
      if (isUpdate) {
        await updateAccount(formData);
      } else {
        await createAccount(formData);
      }
      toast.success(isUpdate ? "Cập nhật thành công!" : "Tạo mới thành công!");
      fetchAccount();
      closeModal();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[1533px] flex flex-col justify-between gap-16">
        <div>
          <TitleText name="Thông tin cá nhân" />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <InputField
              label="Họ :"
              value={formData.profile.lastName}
              onChange={(value) => handleChangeData(value, "profile.lastName")}
              placeholder="Nhập họ"
            />
            {!isUpdate && (
              <InputField
                label="Tên đăng nhập:"
                value={formData.username}
                onChange={(value) => handleChangeData(value, "username")}
                placeholder="Nhập tên đăng nhập"
              />
            )}
            <InputField
              label="Tên :"
              value={formData.profile.firstName}
              onChange={(value) => handleChangeData(value, "profile.firstName")}
              placeholder="Nhập tên"
            />
            {!isUpdate && (
              <InputField
                label="Mật khẩu :"
                type="password"
                value={formData.password}
                onChange={(value) => handleChangeData(value, "password")}
                placeholder="Nhập mật khẩu"
              />
            )}
            <InputField
              label="Địa chỉ :"
              value={formData.profile.address}
              onChange={(value) => handleChangeData(value, "profile.address")}
              placeholder="Nhập địa chỉ"
            />
            {!isUpdate && (
              <InputField
                label="Nhập lại :"
                type="password"
                value={repeatPassword}
                onChange={setRepeatPassword}
                placeholder="Nhập lại mật khẩu"
              />
            )}
            <InputField
              label="SĐT :"
              value={formData.profile.phoneNumber}
              onChange={(value) => handleChangeData(value, "profile.phoneNumber")}
              placeholder="Nhập số điện thoại"
            />
            <SelectField
              label="Chức vụ :"
              value={formData.role.roleId}
              options={roles.map((role) => ({ value: role.roleId, label: role.name }))}
              onChange={(value) => handleChangeData(value || roles[0].roleId, "role.roleId")}
            />
            <SelectField
              label="Trạng thái:"
              value={formData.isActive ? "Hoạt động" : "Nghỉ"}
              options={[
                { value: "Hoạt động", label: "Hoạt động" },
                { value: "Nghỉ", label: "Nghỉ" },
              ]}
              onChange={(value) => handleChangeData(value || "Hoạt động", "isActive")}
            />
            <InputField
              label="CCCD :"
              value={formData.profile.cccd}
              onChange={(value) => handleChangeData(value, "profile.cccd")}
              placeholder="Nhập CCCD"
            />
          </div>
        </div>
        <div className="flex justify-center gap-8 w-full">
          <CustomButton title="Tạo nhân viên" bgColor="#FFAA02" onClick={handleSave} />
          <CustomButton title="Huỷ" bgColor="#CC0E0E" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};
