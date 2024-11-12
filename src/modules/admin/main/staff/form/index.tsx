import { CustomButton } from "../../../../../components/CustomButton";
import { TitleText } from "../../../../../components/texts/title";

interface FormPros {
  closeModal: () => void;
  formData: {
    ho: string;
    ten: string;
    username: string;
    password: string;
    address: string;
    phone: string;
    role: string;
    CCCD: string;
  };

  setData: (value: {
    ho: string;
    ten: string;
    username: string;
    password: string;
    address: string;
    phone: string;
    role: string;
    CCCD: string;
  }) => void;

  isUpdate: boolean;
}
export const Form: React.FC<FormPros> = ({
  closeModal,
  formData,
  setData,
  isUpdate,
}: FormPros) => {
  const handleChangeData = (value: string, key: string) => {
    setData({ ...formData, [key]: value });
  };

  const handleSave = () => {
    if (isUpdate) {
      console.log("update", formData);
    } else {
      console.log("create", formData);
    }
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
                  id="ho"
                  value={formData.ho}
                  onChange={(e) => handleChangeData(e.target.value, "ho")}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập họ"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Tên đăng nhập:</h5>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={(e) => handleChangeData(e.target.value, "username")}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Tên :</h5>
                <input
                  type="text"
                  id="ten"
                  value={formData.ten}
                  onChange={(e) => handleChangeData(e.target.value, "ten")}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập tên"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Mật khẩu :</h5>
                <input
                  type="text"
                  id="password"
                  value={formData.password}
                  onChange={(e) => handleChangeData(e.target.value, "password")}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập mật khẩu"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Địa chỉ :</h5>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChangeData(e.target.value, "address")}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập địa chỉ"
                />
              </div>

              {!isUpdate && (
                <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                  <h5 className="text-lg font-bold text-black">Nhập lại :</h5>
                  <input
                    type="text"
                    // value={formData.confirmPassport}
                    // onChange={(e) =>
                    //   handleChangeData("confirmPassport", e.target.value)
                    // }
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
                  value={formData.phone}
                  onChange={(e) => handleChangeData(e.target.value, "phone")}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Chức vụ :</h5>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleChangeData(e.target.value, "role")}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor">
                  <option value="" disabled>
                    Chọn chức vụ
                  </option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                  <option value="staff">Staff</option>
                  <option value="chef">Chef</option>
                </select>
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">CCCD :</h5>
                <input
                  type="text"
                  id="CCCD"
                  value={formData.CCCD}
                  onChange={(e) => handleChangeData(e.target.value, "CCCD")}
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
