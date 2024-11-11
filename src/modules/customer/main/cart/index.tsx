import React, { useState } from "react";
import { OrderItem } from "../../../../components/customer/orderItem";
import { CustomerHeader } from "../../../../components/CustomerHeader";

export const Cart: React.FC = () => {
  const items = [
    {
      name: "Hủ tiếu kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Bò kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Cá kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Hủ tiếu kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Bò kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Cá kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Hủ tiếu kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Bò kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Cá kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Hủ tiếu kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Bò kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Cá kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Hủ tiếu kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Bò kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Cá kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Hủ tiếu kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Bò kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Cá kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Hủ tiếu kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Bò kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Cá kho",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
    },
  ];

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [quantities, setQuantities] = useState<number[]>(
    Array(items.length).fill(1)
  );

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.name));
    }
    setSelectAll(!selectAll);
  };

  const handleItemSelect = (name: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(name)
        ? prevSelectedItems.filter((item) => item !== name)
        : [...prevSelectedItems, name]
    );
  };

  const handleQuantityChange = (index: number, amount: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? Math.max(0, quantity + amount) : quantity
      )
    );
  };

  const totalAmount = items.reduce((acc, item, index) => {
    if (selectedItems.includes(item.name)) {
      return acc + item.price * quantities[index];
    }
    return acc;
  }, 0);

  return (
    <div className="p-4  min-h-screen mt-[40px] mb-[136px]">
      <CustomerHeader
        isBack={false}
        title="Đơn gọi"
        bg={"white"}
      ></CustomerHeader>

      <div className="flex flex-col ">
        {items.map((item, index) => (
          <OrderItem
            key={index}
            name={item.name}
            price={item.price}
            imageSrc={item.imageSrc}
            selected={selectedItems.includes(item.name)}
            onSelect={() => handleItemSelect(item.name)}
            quantity={quantities[index]}
            onQuantityChange={(amount) => handleQuantityChange(index, amount)}
          />
        ))}
      </div>

      <div className="bg-white p-4 rounded-t-lg border-t border-gray-200 fixed left-0 right-0 bottom-[73px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={handleSelectAll}
              className={`w-6 h-6 text-white rounded-full flex items-center mr-3 justify-center ${
                selectAll ? "bg-[#ffaa02]" : "bg-gray-300"
              }`}
            >
              <i className="fas fa-check"></i>
            </button>
            <span className="text-[#ffaa02] font-semibold">Tất cả</span>
          </div>
          <div className="text-lg font-semibold">
            Tổng tiền:{" "}
            <span className="text-[#ffaa02]">
              {totalAmount.toLocaleString()}đ
            </span>
          </div>
        </div>
        <button className="w-full mt-4 py-2 bg-[#ffaa02] text-white font-bold rounded-lg">
          Gửi đơn
        </button>
      </div>
    </div>
  );
};
