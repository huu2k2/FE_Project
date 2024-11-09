import { useState } from "react";
import MenuEditDelete from "./MenuEditDelete";

interface AreaPros {
  area: { id: string; name: string };
  handleEdit: (value: { idArea: string; nameArea: string }) => void;
}

export const AreaItem: React.FC<AreaPros> = (data: AreaPros) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowEditForm = () => {
    data.handleEdit({ idArea: data.area.id, nameArea: data.area.name });
  };

  const handleDelete = () => {
    console.log("Deleted");
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <div className="absolute w-[43px] h-[21px] right-0 top-0">
            <button
              className="w-full h-full"
              onClick={() => setShowMenu((prev) => !prev)}>
              <i
                className="fa-solid fa-ellipsis fa-2xl"
                style={{ color: "#000000" }}></i>
            </button>
            {/* Chose edit/delete */}
            {showMenu && (
              <MenuEditDelete
                onEdit={handleShowEditForm}
                onDelete={handleDelete}
                onClose={() => setShowMenu(false)}
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
