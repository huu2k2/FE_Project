import { CustomButton } from "../../../../../components/CustomButton";
import QRCodeGenerator from "../../../../../components/QRCodeGenerator";

interface FormPros {
  closeModal: () => void;

  formData: {
    id: string;
    name: string;
    area: string;
  };

  setData: (value: { id: string; name: string; area: string }) => void;
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

  const handleSubmit = () => {
    if (isUpdate) {
      console.log("update", formData);
    } else {
      console.log("create", formData);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg  shadow-lg w-[30%]">
          <h2 className="text-center text-3xl font-bold mb-4 text-black">
            {/* Set title */}
            Thông tin bàn
          </h2>
          <div className="grid gap-4 mb-4">
            <div className="flex items-start">
              {/* Hiển thị QR code nếu isUpdate là true */}
              {isUpdate && (
                <div className="mr-4 flex-shrink-0">
                  <QRCodeGenerator value={formData.id} size={128} />
                </div>
              )}
              <div className="flex flex-col flex-grow">
                {/* Tên bàn */}
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="name"
                    className="font-semibold text-black mr-2 min-w-[70px]"
                  >
                    Tên bàn
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChangeData(e.target.value, "name")}
                    className="w-full px-3 py-2 border bg-[#E2E2E2] text-black rounded-lg focus:outline-none focus:border-backgroundColor"
                    placeholder="Tên bàn"
                  />
                </div>

                {/* Khu vực */}
                <div className="flex items-center">
                  <label
                    htmlFor="area"
                    className="font-semibold text-black mr-2 min-w-[70px]"
                  >
                    Khu vực
                  </label>
 
                  <select className="select  w-full  text-black px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor">
                    <option disabled selected>
                    Khu vực
                    </option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <CustomButton
              title="Xác nhận"
              bgColor="#FFAA02"
              onClick={() => handleSubmit()}
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
