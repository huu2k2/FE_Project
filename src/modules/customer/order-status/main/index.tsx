import React, { useState } from "react";
import { OrderStatusItem } from "../../../../components/customer/orderStatusItem";

const items = [
  {
    id: "aaaaa",
    name: "Hủ tiếu khô",
    price: 45000,
    imageSrc: "https://via.placeholder.com/150",
    status: "Đã huỷ",
    quantity: 2,
  },
  {
    id: "efdfsd",
    name: "Bò kho",
    price: 45000,
    imageSrc: "https://via.placeholder.com/150",
    status: "Đã hoàn thành",
    quantity: 3,
  },
  {
    id: "sfsdfsdf",
    name: "Cá kho",
    price: 45000,
    imageSrc: "https://via.placeholder.com/150",
    status: "Đang nấu",
    quantity: 3,
  },
  {
    id: "hdvuyfdvhf",
    name: "Cá lóc nướng",
    price: 45000,
    imageSrc: "https://via.placeholder.com/150",
    status: "Đang chờ xác nhận",
    quantity: 2,
  },
];

const OrderStatus: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemSelect = (id: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };

  return (
    <div className="flex flex-col h-full max-w-md mx-auto bg-white shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#ffaa02] border-b-2 border-gray-300 pb-2">
        Trạng thái đơn gọi
      </h2>

      {/* Order Items List */}
      <div className="space-y-2 flex-grow overflow-y-auto">
        {items.map((item, index) => (
          <OrderStatusItem
            id={item.id}
            key={index}
            name={item.name}
            status={item.status}
            price={item.price}
            quantity={item.quantity}
            imageSrc={item.imageSrc}
            selected={selectedItems.includes(item.name)}
            onSelect={() => handleItemSelect(item.name)}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="bg-white p-4 rounded-t-lg border-t border-gray-50">
        <button className="w-full h-[50px] mt-4 py-2 bg-[#ffaa02] text-white font-bold rounded-[20px]">
          Huỷ món
        </button>
      </div>
    </div>
  );
};

export default OrderStatus;
