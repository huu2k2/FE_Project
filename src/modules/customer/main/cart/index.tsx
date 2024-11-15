import React, { useState, useEffect, useMemo } from "react";
import { OrderItem } from "../../../../components/customer/orderItem";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { getCart } from "../../../../services/cart-service";

export const Cart: React.FC = () => {
  const items = getCart() || []; // Đảm bảo items luôn là mảng

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [quantities, setQuantities] = useState<number[]>(
    Array(items.length).fill(1)
  );

  // Tính toán tổng tiền với useMemo
  const totalAmount = useMemo(() => {
    return items.reduce((acc, item, index) => {
      if (selectedItems.includes(item.id)) {
        return acc + item.price * quantities[index];
      }
      return acc;
    }, 0);
  }, [selectedItems, quantities, items]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleItemSelect = (id: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id)
        : [...prevSelectedItems, id]
    );
  };

  const handleQuantityChange = (index: number, amount: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? Math.max(0, quantity + amount) : quantity
      )
    );
  };

  const submit = () => {
    const filteredItems = items.filter((item) =>
      selectedItems.includes(item.id)
    );
    // call api
    console.log("Đơn hàng:", filteredItems);
  };

  useEffect(() => {
    setSelectAll(selectedItems.length === items.length);
  }, [selectedItems, items]);

  return (
    <div className="p-4 min-h-screen mt-[40px] mb-[136px]">
      <CustomerHeader isBack={false} title="Đơn gọi" bg={"white"} />

      <div className="flex flex-col ">
        {items.map((item, index) => (
          <OrderItem
            key={item.id}
            name={item.name}
            price={item.price}
            imageSrc={item.imageSrc}
            selected={selectedItems.includes(item.id)}
            onSelect={() => handleItemSelect(item.id)}
            quantity={quantities[index]}
            onQuantityChange={(amount) => handleQuantityChange(index, amount)}
          />
        ))}
      </div>

      <div className="bg-white p-4 rounded-t-lg border-t border-gray-200 fixed left-0 right-0 bottom-[50px]">
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
        <button
          className="w-full mt-4 py-2 bg-[#ffaa02] text-white font-bold rounded-lg mb-5"
          onClick={submit}
        >
          Gửi đơn
        </button>
      </div>
    </div>
  );
};
