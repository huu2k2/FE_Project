import React, { useState, useEffect, useMemo } from "react";
import { OrderItem } from "../../../../components/customer/orderItem";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { getCart, removeFromCart } from "../../../../services/cart-service";
import { CartModel } from "../../../../models/cart";
import { createOrderDetail } from "../../../../services/order-detail-service";
import { OrderDetailModel } from "../../../../models/orderDetail";
import { OrderDetailStatus } from "../../../../enum/enum";

export const Cart: React.FC = () => {
  const [items, setItems] = useState<CartModel[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const totalAmount = useMemo(() => {
    return items.reduce((acc, item) => {
      if (selectedItems.includes(item.id)) {
        return acc + item.price * item.quantity;
      }
      return acc;
    }, 0);
  }, [selectedItems, items]);

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

  const handleQuantityChange = (id: string, amount: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      )
    );
  };

  useEffect(() => {
    setItems(getCart());
  }, []);

  const submit = async () => {
    let details: OrderDetailModel[] = [];
    const filteredItems = items.filter((item) =>
      selectedItems.includes(item.id)
    );

    filteredItems.forEach((item) => {
      details.push({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
        status: OrderDetailStatus.PENDING,
        orderId: "18e10579-a324-11ef-8e57-0242ac130002",
      });
    });
    let reulst = await createOrderDetail(details);
    console.log(reulst.data);
    filteredItems.forEach((item) => {
      removeFromCart(item.id);
    });
    setItems(getCart());
    setSelectedItems([]);
    setSelectAll(false);
  };

  useEffect(() => {
    setSelectAll(selectedItems.length === items.length);
  }, [selectedItems, items]);

  return (
    <div className="p-4 min-h-screen mt-[40px] mb-[136px]">
      <CustomerHeader isBack={false} title="Đơn gọi" bg={"white"} />

      <div className="flex flex-col ">
        {items.map((item) => (
          <OrderItem
            key={item.id}
            name={item.name}
            price={item.price}
            imageSrc={item.imageSrc}
            selected={selectedItems.includes(item.id)}
            onSelect={() => handleItemSelect(item.id)}
            quantity={item.quantity}
            onQuantityChange={(amount) => handleQuantityChange(item.id, amount)}
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
