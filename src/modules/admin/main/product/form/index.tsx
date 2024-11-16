import React, { useState } from "react";
import { DropDown } from "../../../../../components/dropdowns/dropdows";
import {
  CategoryModel,
  CreateProductDto,
} from "../../../../../models/category";
import { createProduct } from "../../../../../services/product-service";
import {toast } from 'react-toastify';
interface IFormData {
  closeModal: () => void;

  formData: {
    name: string;
    price: string;
    description: string;
    type: string;
    image?: string;
  };

  setData: (value: {
    name: string;
    price: string;
    description: string;
    type: string;
    image?: string;
  }) => void;
  isUpdate: boolean;
  list: CategoryModel[];
}
export const Form: React.FC<IFormData> = ({
  closeModal,
  formData,
  setData,
  isUpdate,
  list,
}: IFormData) => {
  const [getIdCategory, setIdCategory] = useState<string>("");
  const handleOpenImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeData = (value: string, key: string) => {
    setData({ ...formData, [key]: value });
  };

  const handleSave = async () => {
    const data: CreateProductDto = {
      name:formData.name,
      description:formData.description,
      image: formData.image as string,
      categoryId: getIdCategory,
      price: Number(formData.price),
      isActive:true
    };
    if (isUpdate) {
    } else {
      console.log("created", data);
      const rs = await createProduct(data);
      if(rs){
        toast.success("Tao sản phẩm mới thành công!")
        closeModal()
      }
      else{
        toast.error("Tao sản phẩm mới thất bại!")
      }
    }
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
              type="number"
              value={formData.price}
              onChange={(e) => handleChangeData(e.target.value, "price")}
            />

            <label className="block mb-2">Mô tả:</label>
            <textarea
              className="w-full p-2 mb-4 border rounded bg-gray-200 text-black placeholder:text-gray-500"
              placeholder="Mô tả"
              rows={3}
              value={formData.description}
              onChange={(e) => handleChangeData(e.target.value, "description")}
            />

            <label className="block mb-2">Loại:</label>
            <DropDown
              categories={list}
              setIdCategory={setIdCategory}
              W={"100%"}
            />
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
                  src={
                    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                  }
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
            onClick={closeModal}
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
