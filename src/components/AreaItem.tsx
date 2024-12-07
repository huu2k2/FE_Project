import { useState } from "react";
import MenuEditDelete from "./MenuEditDelete";
import { DeleteModal } from "./DeleteModal";
import { deleteArea } from "../services/area.service";

interface AreaPros {
  area: { id: string; name: string };
  handleEdit: (value: { idArea: string; nameArea: string }) => void;
  fetchData: () => void;
}

export const AreaItem: React.FC<AreaPros> = (data: AreaPros) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const handleShowEditForm = () => {
    data.handleEdit({ idArea: data.area.id, nameArea: data.area.name });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteArea = async () => {
    try {
      let result = await deleteArea(data.area.id);
      // reload items
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    data.fetchData();
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <DeleteModal
          title="Bạn chắc chắn xoá khu vực này"
          closeModel={() => setIsModalOpen(false)}
          handle={() => handleDeleteArea()}></DeleteModal>
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
              }}>
              <i
                className="fa-solid fa-ellipsis fa-2xl"
                style={{ color: "#000000" }}></i>
            </button>
            {showMenu && (
              <MenuEditDelete
                onEdit={handleShowEditForm}
                onDelete={openModal}
                onClose={() => setShowMenu(false)}
                position={menuPosition}
              />
            )}
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt={data.area.name}
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="p-4 bg-backgroundColor text-white">
          <h2
            className="text-md font-bold text-black"
            style={{ textAlign: "center" }}>
            {data.area.name}
          </h2>
        </div>
      </div>
    </>
  );
};
