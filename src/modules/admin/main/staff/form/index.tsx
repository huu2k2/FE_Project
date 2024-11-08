import { CustomButton } from "../../../../../components/CustomButton";

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

export const Form: React.FC<FormPros> = ({ closeModal }: FormPros) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg  shadow-lg w-[1000px]">
          <h2 className="text-center text-3xl font-bold mb-4 text-black">
            Thông tin tài khoản
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="col-span-1">
              <input
                type="text"
                id=""
                className="w-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập họ"
              />
            </div>
            <div className="col-span-1">
              <input
                type="text"
                id="password"
                className="w-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập tên đăng nhập"
              />
            </div>
            <div className="col-span-1">
              <input
                type="text"
                id="password"
                className="w-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập tên"
              />
            </div>
            <div className="col-span-1">
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="col-span-1">
              <input
                type="text"
                id="password"
                className="w-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập đại chỉ"
              />
            </div>
            <div className="col-span-1">
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <div className="col-span-1">
              <input
                type="password"
                id="texy"
                className="w-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="col-span-1">
              <select
                id="password"
                className="w-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
              >
                <option defaultChecked>Chọn chức vụ</option>
                <option>Phục vụ</option>
                <option>Bếp</option>
                <option>Quản lí</option>
              </select>
            </div>
            <div className="col-span-1">
              <input
                type="text"
                id="password"
                className="w-full px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Nhập CCCD"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <CustomButton
              title="Xác nhận"
              bgColor="#FFAA02"
              onClick={() => {}}
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
