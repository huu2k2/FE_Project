import React from "react";

export const AddForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Quản lý món ăn</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Tên món ăn:</label>
            <input
              className="w-full p-2 mb-4 border rounded"
              placeholder="Tên món ăn"
            />

            <label className="block mb-2">Giá:</label>
            <input
              className="w-full p-2 mb-4 border rounded"
              placeholder="Giá"
            />

            <label className="block mb-2">Mô tả:</label>
            <textarea
              className="w-full p-2 mb-4 border rounded"
              placeholder="Mô tả"
              rows={3}
            />

            <label className="block mb-2">Loại:</label>
            <select className="w-full p-2 mb-2 border rounded">
              <option>Phở</option>
              <option>Mì</option>
              <option>Cơm</option>
              <option>Hủ Tiếu</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <label className="block mb-2">Thêm ảnh</label>
            <div className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded mb-4">
              <span>📷</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded mr-2">
            Huỷ
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            Lưu món
          </button>
        </div>
      </div>
    </div>
  );
};
