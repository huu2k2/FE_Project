import { CustomButton } from "../../../../../components/CustomButton";
import { createArea, updateArea } from "../../../../../services/area.service";
import { toast } from "react-toastify";

interface FormPros {
  closeModal: () => void;

  formData: {
    areaId: string;
    name: string;
  };

  setData: (value: { areaId: string; name: string }) => void;
  isUpdate: boolean;
  fetchData: () => void;
}

export const Form: React.FC<FormPros> = ({
  closeModal,
  formData,
  setData,
  isUpdate,
  fetchData,
}: FormPros) => {
  const handleChangeData = (value: string, key: string) => {
    setData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      toast.error("Tên khu vực không được để trống!");
      return;
    }
    if (isUpdate) {
      try {
        let result = await updateArea(formData);
        console.log(result);
      } catch (error: any) {
        toast.error(error.message);
      }
    } else {
      try {
        let result = await createArea(formData);
        console.log(result);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
    fetchData();
    closeModal();
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg  shadow-lg w-[30%]">
          <h2 className="text-center text-3xl font-bold mb-4 text-black">
            {/* Set title */}
            Thông tin khu vực
          </h2>
          <div className="grid gap-4 mb-4">
            <div className="col-span-1">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleChangeData(e.target.value, "name")}
                className="w-full px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor"
                placeholder="Tên khu vuc"
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
