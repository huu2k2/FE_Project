import React, { useState, useEffect } from "react";
import { OrderItem } from "../../../../components/customer/orderItem";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { createOrder } from "../../../../services/order-service";
import { createOrderDetail } from "../../../../services/order-detail-service";

export const Cart: React.FC = () => {
  const initialItems = [
    {
      id: "0064a8ff-a332-11ef-bfc1-0242ac120002",
      name: "A",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
      quantities: 1,
    },
    {
      id: "0e0f10f4-a332-11ef-bfc1-0242ac120002",
      name: "B",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
      quantities: 1,
    },
    {
      id: "1f1f6867-a332-11ef-bfc1-0242ac120002",
      name: "C",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
      quantities: 1,
    },
    {
      id: "2a7cd53b-a332-11ef-bfc1-0242ac120002",
      name: "D",
      price: 45000,
      imageSrc: "https://via.placeholder.com/150",
      quantities: 1,
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Chọn tất cả hoặc bỏ chọn tất cả
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  // Chọn hoặc bỏ chọn một mục
  const handleItemSelect = (id: string) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((itemId) => itemId !== id);
      }
      return [...prevSelectedItems, id];
    });
  };

  // Thay đổi số lượng trong mảng items
  const handleQuantityChange = (index: number, amount: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, quantities: Math.max(0, item.quantities + amount) }
          : item
      )
    );
  };

  // Tổng tiền
  const totalAmount = items.reduce((acc, item) => {
    if (selectedItems.includes(item.id)) {
      return acc + item.price * item.quantities;
    }
    return acc;
  }, 0);

  // Cập nhật trạng thái "chọn tất cả" khi danh sách thay đổi
  useEffect(() => {
    setSelectAll(selectedItems.length === items.length);
  }, [selectedItems]);

  // Gửi dữ liệu
  const submit = async () => {
    try {
      // Tạo order sau khi đăng nhập (xoá sau khi xong chức năng login)
      const result = await createOrder({
        customerId: "2c69f714-a325-11ef-bfc1-0242ac120002",
      });
      const id = result.data.orderId;
      const filteredItems = items.filter((item) =>
        selectedItems.includes(item.id)
      );
      const detailCreationPromises = filteredItems.map((item) =>
        createOrderDetail({
          orderId: id,
          productId: item.id,
          quantity: item.quantities,
        })
      );
      await Promise.all(detailCreationPromises);
      console.log("All details created successfully.");
    } catch (error) {
      console.error("Error creating order: ", error);
    }
  };

  return (
    <div className="p-4  min-h-screen mt-[40px] mb-[136px]">
      <CustomerHeader
        isBack={false}
        title="Đơn gọi"
        bg={"white"}></CustomerHeader>

      <div className="flex flex-col ">
        {items.map((item, index) => (
          <OrderItem
            key={item.id}
            name={item.name}
            price={item.price}
            imageSrc={item.imageSrc}
            selected={selectedItems.includes(item.id)}
            onSelect={() => handleItemSelect(item.id)}
            quantity={item.quantities}
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
              }`}>
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
          onClick={submit}>
          Gửi đơn
        </button>
      </div>
    </div>
  );
};
