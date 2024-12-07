import React, { useEffect, useState } from "react";
import { DropDown } from "../../../../../components/dropdowns/dropdows";
import {
  CategoryModel,
  CreateProductDto,
} from "../../../../../models/category";
import {
  createProduct,
  updateProduct,
} from "../../../../../services/product.service";
import { toast } from "react-toastify";
import { ProductModel } from "../../../../../models/product";
import { useLoading } from "../../../../../hooks/loading";
interface IFormData {
  closeModal: () => void;
  formData: ProductModel;
  setData: (value: ProductModel) => void;
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
  const { isLoading, setIsLoading } = useLoading();

  const handleSave = async () => {
    if (!formData.name.trim()) {
      toast.error("Tên món ăn không được để trống!");
      return;
    }

    if (!formData.image.trim()) {
      toast.error("Hình ảnh món ăn không được để trống!");
      return;
    }

    if (formData.price <= 0) {
      toast.error("Vui lòng đặt giá món ăn!");
      return;
    }

    console.log(getIdCategory);

    if (!getIdCategory.trim()) {
      toast.error("Vui lòng chọn danh mục món ăn!");
      return;
    }

    if (isLoading) return;
    setIsLoading(true);
    const data: CreateProductDto = {
      name: formData.name,
      description: formData.description,
      image: formData.image as string,
      categoryId: getIdCategory || formData.categoryId,
      price: Number(formData.price),
      isActive: true,
    };

    try {
      if (isUpdate) {
        const rs = await updateProduct(formData.productId, data);
        if (rs) {
          toast.success("Cập nhật sản phẩm thành công!");
          closeModal();
        } else {
          toast.error("Cập nhật sản phẩm thất bại!");
        }
      } else {
        const rs = await createProduct(data);
        if (rs) {
          toast.success("Tạo sản phẩm mới thành công!");
          closeModal();
        } else {
          toast.error("Tạo sản phẩm mới thất bại!");
        }
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại!");
    } finally {
      setIsLoading(false); // Kết thúc tải
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
              defaultValue={formData.category || list[0]}
              categories={list}
              setIdCategory={setIdCategory}
              W={"100%"}
            />
          </div>

          <div className="flex flex-col items-center ">
            <label className="block mb-2">Thêm ảnh</label>
            <label
              htmlFor="openImage"
              className="w-full h-full bg-gray-300 flex items-center justify-center rounded mb-4 cursor-pointer relative">
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
            className="px-4 py-2 bg-red-500 text-white rounded mr-2">
            Huỷ
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded"
            onClick={handleSave}>
            Lưu món
          </button>
        </div>
      </div>
    </div>
  );
};
