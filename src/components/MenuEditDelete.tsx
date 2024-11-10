import React, { useRef, useEffect } from "react";

interface DropdownMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}

const MenuEditDelete: React.FC<DropdownMenuProps> = ({
  onEdit,
  onDelete,
  onClose,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-full mt-2 w-[100px] bg-white shadow-lg items-center rounded-lg p-2">
      <button
        className="block w-full text-left p-1 hover:bg-gray-200 text-green-600"
        onClick={() => {
          onEdit();
          onClose();
        }}>
        Chỉnh sửa
      </button>
      <button
        className="block w-full text-left p-1 hover:bg-gray-200 text-red-600"
        onClick={() => {
          onDelete();
          onClose();
        }}>
        Xóa
      </button>
    </div>
  );
};

export default MenuEditDelete;
