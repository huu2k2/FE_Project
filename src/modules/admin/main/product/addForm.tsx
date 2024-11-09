import React, { useState } from "react";

interface IFormData {
  name: string;
  price: string;
  describe: string;
  type: string;
  image?: string;
}
export const AddForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    price: "",
    describe: "",
    type: "",
    image: "",
  });

  const handleOpenImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result as string }); // Set the image data URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  const handleChangeData = (value: string, key: string) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleSave = () => {
    console.log(formData);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Quản lý món ăn</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Tên món ăn:</label>
            <input
              className="w-full p-2 mb-4 border rounded bg-gray-200 text-black placeholder:text-gray-500"
              placeholder="Tên món ăn"
              value={formData.name}
              onChange={(e) => handleChangeData(e.target.value, "name")}
            />

            <label className="block mb-2">Giá:</label>
            <input
              className="w-full p-2 mb-4 border rounded bg-gray-200 text-black placeholder:text-gray-500"
              placeholder="Giá"
              value={formData.price}
              onChange={(e) => handleChangeData(e.target.value, "price")}
            />

            <label className="block mb-2">Mô tả:</label>
            <textarea
              className="w-full p-2 mb-4 border rounded bg-gray-200 text-black placeholder:text-gray-500"
              placeholder="Mô tả"
              rows={3}
              value={formData.describe}
              onChange={(e) => handleChangeData(e.target.value, "describe")}
            />

            <label className="block mb-2">Loại:</label>
            <select
              className="w-full p-2 mb-2 border rounded bg-gray-200 text-black placeholder:text-gray-500"
              value={formData.type}
              onChange={(e) => handleChangeData(e.target.value, "type")}
            >
              <option>Phở</option>
              <option>Mì</option>
              <option>Cơm</option>
              <option>Hủ Tiếu</option>
            </select>
          </div>

          <div className="flex flex-col items-center ">
            <label className="block mb-2">Thêm ảnh</label>
            <label
              htmlFor="openImage"
              className="w-full h-full bg-gray-300 flex items-center justify-center rounded mb-4 cursor-pointer relative"
            >
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Selected"
                  className="rounded  w-full h-full"
                />
              ) : (
                <img
                src={"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"}
                alt="Selected"
                className="rounded  w-full h-full"
              />
              )}
            </label>
            <input
              id="openImage"
              type="file"
              accept="image/*"
              onChange={handleOpenImage}
              className="hidden"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded mr-2"
          >
            Huỷ
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded"
            onClick={handleSave}
          >
            Lưu món
          </button>
        </div>
      </div>
    </div>
  );
};
