import React, { useRef, useEffect } from "react";

interface DropdownMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
  position: { top: number; left: number };
}

const MenuEditDelete: React.FC<DropdownMenuProps> = ({
  onEdit,
  onDelete,
  onClose,
  position,
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      style={{ top: position.top, left: position.left }}
      className="fixed mt-2 w-[100px] bg-white shadow-lg items-center rounded-lg p-2 z-50">
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
