import React from "react";

interface ItemDrawerProps {
  id: string;
  name: string;
  isActiveItem: boolean;
  onClick: () => void;
}

export const ItemDrawer: React.FC<ItemDrawerProps> = ({
  id,
  name,
  isActiveItem,
  onClick,
}) => {
  return (
    <li
      key={id}
      className={`py-3 px-4 bg-white rounded-lg shadow-md mb-2 hover:shadow-lg transition-shadow duration-200  cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex relative">{name}</div>
    </li>
  );
};
