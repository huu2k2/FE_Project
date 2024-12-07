import { useEffect, useState } from "react";
import { CustomButton } from "../../../../../components/CustomButton";
import QRCodeGenerator from "../../../../../components/QRCodeGenerator";
import { getAllArea } from "../../../../../services/area.service";
import {
  createTable,
  updateTable,
} from "../../../../../services/table.service";
import { AreaModel } from "../../../../../models/area";
import { toast } from "react-toastify";

interface FormPros {
  closeModal: () => void;

  formData: {
    tableId: string;
    name: string;
    status: string;
    areaId: string;
  };

  setData: (value: {
    tableId: string;
    name: string;
    status: string;
    areaId: string;
  }) => void;
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
  const [areaList, setAreaList] = useState<AreaModel[]>([]);

  const fetchAreas = async () => {
    try {
      const result = await getAllArea();
      setAreaList(result.data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  const handleChangeData = (value: string, key: string) => {
    setData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      toast.error("Tên bàn không được để trống!");
      return;
    }
    if (!formData.areaId.trim()) {
      toast.error("Vui lòng chọn khu vực!");
      return;
    }

    if (isUpdate) {
      try {
        let result = await updateTable(formData);
        console.log(result);
      } catch (error: any) {
        toast.error(error.message);
      }
    } else {
      try {
        let result = await createTable(formData);
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
            Thông tin bàn
          </h2>
          <div className="grid gap-4 mb-4">
            <div className="flex items-start">
              {/* Hiển thị QR code nếu isUpdate là true */}
              {isUpdate && (
                <div className="mr-4 flex-shrink-0">
                  <QRCodeGenerator value={formData.tableId} size={128} />
                </div>
              )}
              <div className="flex flex-col flex-grow">
                {/* Tên bàn */}
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="name"
                    className="font-semibold text-black mr-2 min-w-[70px]">
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
                    className="font-semibold text-black mr-2 min-w-[70px]">
                    Khu vực
                  </label>

                  <select
                    value={formData.areaId}
                    onChange={(e) => handleChangeData(e.target.value, "areaId")}
                    className="select w-full text-black px-3 py-2 border bg-[#E2E2E2] rounded-lg focus:outline-none focus:border-backgroundColor">
                    <option selected>Chọn khu vực</option>
                    {/* Duyệt danh sách areas và tạo option */}
                    {areaList.map((area) => (
                      <option key={area.areaId} value={area.areaId}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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
