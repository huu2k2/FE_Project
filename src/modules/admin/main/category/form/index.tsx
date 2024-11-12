import { CustomButton } from "../../../../../components/CustomButton";
import { createCategory } from "../../../../../services/category-service";

interface FormPros {
  closeModal: () => void;
  formData: {
    id: string;
    name: string;
  };
  setData: (value: { id: string; name: string }) => void;
  isState: number;
}

export const Form: React.FC<FormPros> = ({
  closeModal,
  formData,
  setData,
  isState,
}: FormPros) => {
  const handleChangeData = (value: string, key: string) => {
    setData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    if (isState == 1) {
      console.log("update: ", formData);
    } else {
      console.log("create: ", formData);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg  shadow-lg w-[30%]">
          <h2 className="text-center text-3xl font-bold mb-4 text-black">
            Thông tin tài khoản
          </h2>
          <div className="grid gap-4 mb-4">
            <div className="col-span-1">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleChangeData(e.target.value, "name")}
                className="w-full px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Tên danh mục"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <CustomButton
              title="Xác nhận"
              bgColor="#FFAA02"
              onClick={() => handleSubmit()}></CustomButton>
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
