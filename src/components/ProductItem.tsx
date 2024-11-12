import { useState } from "react";
import MenuEditDelete from "./MenuEditDelete";
import { DeleteModal } from "./DeleteModal";
import { ProductModel } from "../models/product";

interface ProductPros {
  product: ProductModel;
  handleEdit: (value: ProductModel) => void;
}

export const ProductItem: React.FC<ProductPros> = (data: ProductPros) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const handleShowEditForm = () => {
    data.handleEdit({
      name: data.product.name,
      price: data.product.price,
      type: data.product.type,
    });
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <DeleteModal
          title="Bạn chắc chắn sản phẩm này"
          closeModel={() => setIsModalOpen(false)}
          handle={() => {
            console.log("Deleted", data.product);
          }}
        ></DeleteModal>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <div className="absolute w-[43px] h-[21px] right-0 top-0">
            <button
              className="w-full h-full"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMenuPosition({ top: rect.bottom, left: rect.right - 100 });
                setShowMenu((prev) => !prev);
              }}
            >
              <i
                className="fa-solid fa-ellipsis fa-2xl"
                style={{ color: "#000000" }}
              ></i>
            </button>
            {/* Chose edit/delete */}
            {showMenu && (
              <MenuEditDelete
                onEdit={handleShowEditForm}
                onDelete={handleDelete}
                onClose={() => setShowMenu(false)}
                position={menuPosition}
              />
            )}
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt={data.product.name}
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="p-4 bg-backgroundColor text-white">
          <h2 className="text-md font-bold text-black">{data.product.name}</h2>
          <div className="flex space-x-2">
            <p className="font-bold text-black">Giá:</p>
            <p>{data.product.price}</p>
          </div>
          <div className="flex space-x-2">
            <p className="font-bold text-black">Loại:</p>
            <p>{data.product.type}</p>
          </div>
        </div>
      </div>
    </>
  );
};
