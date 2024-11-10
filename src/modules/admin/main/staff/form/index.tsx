import { useState } from "react";
import { CustomButton } from "../../../../../components/CustomButton";
import { TitleText } from "../../../../../components/texts/title";

interface FormPros {
  closeModal: () => void;
  // data: {
  //   username: string;
  //   password: string;
  //   gender: string;
  //   date: string;
  //   address: string;
  //   phone: string;
  //   email: string;
  // };
}
interface IFormData {
  ho: string;
  ten: string;
  username: string;
  passport: string;
  confirmPassport: string;
  addres: string;
  phone: string;
  role: string;
  CCCD: string;
}
export const Form: React.FC<FormPros> = ({ closeModal }: FormPros) => {
  const [formData, setFormData] = useState<IFormData>({
    ho: "",
    ten: "",
    username: "",
    passport: "",
    confirmPassport: "",
    addres: "",
    phone: "",
    role: "",
    CCCD: "",
  });

  const handleInfo = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = () => {
    console.log(formData);
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
                  value={formData.ho}
                  onChange={(e) => handleInfo("ho", e.target.value)}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập họ"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Tên đăng nhập:</h5>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInfo("username", e.target.value)}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Tên :</h5>
                <input
                  type="text"
                  value={formData.ten}
                  onChange={(e) => handleInfo("ten", e.target.value)}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập tên"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Mật khẩu :</h5>
                <input
                  type="text"
                  value={formData.passport}
                  onChange={(e) => handleInfo("passport", e.target.value)}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập mật khẩu"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Địa chỉ :</h5>
                <input
                  type="text"
                  value={formData.addres}
                  onChange={(e) => handleInfo("addres", e.target.value)}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập địa chỉ"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Nhập lại :</h5>
                <input
                  type="text"
                  value={formData.confirmPassport}
                  onChange={(e) =>
                    handleInfo("confirmPassport", e.target.value)
                  }
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">SĐT :</h5>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleInfo("phone", e.target.value)}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">Chức vụ :</h5>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => handleInfo("role", e.target.value)}
                  className="w-[501px] h-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                  placeholder="Nhập chức vụ"
                />
              </div>

              <div className="col-span-1 flex justify-between items-center w-[643px] h-[68px]">
                <h5 className="text-lg font-bold text-black">CCCD :</h5>
                <input
                  type="text"
                  value={formData.CCCD}
                  onChange={(e) => handleInfo("CCCD", e.target.value)}
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
              onClick={handleSave}
            ></CustomButton>
            <CustomButton
              title="Huỷ"
              bgColor="#CC0E0E"
              onClick={closeModal}
            ></CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};
