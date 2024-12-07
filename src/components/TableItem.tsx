import { useState } from "react";
import MenuEditDelete from "./MenuEditDelete";
import QRCodeGenerator from "./QRCodeGenerator";
import { DeleteModal } from "./DeleteModal";
import { TableModel } from "../models/table";
import { deleteTable } from "../services/table.service";
import { ip } from "../utils/baseURL";

interface TablePros {
  table: TableModel;
  handleEdit: (value: {
    idTable: string;
    nameTable: string;
    tableArea: string;
  }) => void;
  fetchData: () => {};
}

export const TableItem: React.FC<TablePros> = (data: TablePros) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const openModel = () => {
    setIsModalOpen(true);
  };
  const handleDeleteTable = async () => {
    try {
      let result = await deleteTable(data.table.tableId);
      // reload items
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    data.fetchData();
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowEditForm = () => {
    data.handleEdit({
      idTable: data.table.tableId,
      nameTable: data.table.name,
      tableArea: data.table.areaId,
    });
  };

  return (
    <>
      {isModalOpen && (
        <DeleteModal
          title="Bạn chắc chắn xoá bàn này"
          closeModel={() => setIsModalOpen(false)}
          handle={() => handleDeleteTable()}></DeleteModal>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative flex items-center justify-center">
          <QRCodeGenerator
            value={`http://${ip}:5173/login/customer/${data.table.tableId}`}
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
          } text-center`}>
          {/* Button positioned absolutely within this relative div */}
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
            {/* Chose edit/delete */}
            {showMenu && (
              <MenuEditDelete
                onEdit={handleShowEditForm}
                onDelete={openModel}
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
