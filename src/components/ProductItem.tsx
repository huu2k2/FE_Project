import { useState } from "react";
import MenuEditDelete from "./MenuEditDelete";
import { DeleteModal } from "./DeleteModal";
import { ProductModel } from "../models/product";
import { deleteProduct } from "../services/product-service";
import { toast } from "react-toastify";

interface ProductPros {
  product: ProductModel;
  handleEdit: (value: ProductModel) => void;
}

export const ProductItem: React.FC<ProductPros> = ({
  product,
  handleEdit,
}: ProductPros) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const handleShowEditForm = () => {
    handleEdit(product);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDeteleProduct = async (id: string) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const rs = await deleteProduct(id);
      if (rs) {
        toast.success("Xóa sản phẩm thành công");
        setShowMenu(false);
      } else {
        toast.error("Xóa sản phẩm thất bại");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isModalOpen && (
        <DeleteModal
          title="Bạn chắc chắn sản phẩm này"
          closeModel={() => setIsModalOpen(false)}
          handle={async () => {
            fetchDeteleProduct(product.productId);
            setIsModalOpen(false);
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
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.name}
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="p-4 bg-backgroundColor text-white h-full">
          <h2 className="text-md font-bold text-black">{product.name}</h2>
          <div className="flex space-x-2">
            <p className="font-bold text-black">Giá:</p>
            <p>{product.price} VNĐ</p>
          </div>
        </div>
      </div>
    </>
  );
};
