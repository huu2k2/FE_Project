import { useState } from "react";
import MenuEditDelete from "./MenuEditDelete";
import QRCodeGenerator from "./QRCodeGenerator";
import { DeleteModal } from "./DeleteModal";
import { TableModel } from "../models/table";

interface TablePros {
  table: TableModel;
  handleEdit: (value: {
    idTable: string;
    nameTable: string;
    tableArea: string;
  }) => void;
}

export const TableItem: React.FC<TablePros> = (data: TablePros) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowEditForm = () => {
    data.handleEdit({
      idTable: data.table.id,
      nameTable: data.table.name,
      tableArea: data.table.area,
    });
  };

  return (
    <>
      {isModalOpen && (
        <DeleteModal
          title="Bạn chắc chắn xoá bàn này"
          closeModel={() => setIsModalOpen(false)}
          handle={() => {
            console.log("Deleted", data.table);
          }}
        ></DeleteModal>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative flex items-center justify-center">
          <QRCodeGenerator
            value={data.table.id}
            size={270}
            bgColor="#ffffff"
            fgColor="#000000"
            level="M"
          />
        </div>
        <div
          className={`relative p-4 ${
            data.table.status === "occupied"
              ? "bg-backgroundColor"
              : "bg-green-800"
          } text-center`}
        >
          {/* Button positioned absolutely within this relative div */}
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
          <h2 className="text-md font-bold text-white">{data.table.name}</h2>
        </div>
      </div>
    </>
  );
};
