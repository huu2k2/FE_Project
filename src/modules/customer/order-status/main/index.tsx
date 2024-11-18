import React, { useEffect, useState } from "react";
import { OrderStatusItem } from "../../../../components/customer/orderStatusItem";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { OrderDetailModel } from "../../../../models/orderDetail";
import useCustomerSocket from "../../../../hooks/useCustomerSocket";
import { handleReceiveMess, handleSendMess } from "../../../../hooks/fc.socket";
import { values } from "lodash";

const OrderStatus: React.FC = () => {
  const [items, setItems] = useState<OrderDetailModel[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const customerSocket = useCustomerSocket();

  useEffect(() => {
    const orderId = localStorage.getItem('orderId');
    handleSendMess(customerSocket!,"requestGetOrderDetails", {orderId: orderId})

    handleReceiveMess(customerSocket!,"receiveOrderDetails", (val: OrderDetailModel[]) => {
      setItems(val)
    })

    handleReceiveMess(customerSocket!,"updateOrderDetails", (val: OrderDetailModel[]) => {
      setItems(val)
    })
  })

  const handleItemSelect = (id: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };

  const handleCancel = () => {
    // emit ev to BE
    console.log(selectedItems)
  }

  return (
    <div className="flex flex-col h-full max-w-md mx-auto bg-white">
      <CustomerHeader isBack={true} title="Trạng thái đơn gọi"></CustomerHeader>
      <div className="space-y-2 flex-grow overflow-y-auto mt-[40px]">
        {items.map((item, index) => (
          <OrderStatusItem
            id={item.orderDetailId}
            key={index}
            name={item.product!.name}
            status={item.status}
            price={item.price}
            quantity={item.quantity}
            imageSrc={item.product!.image}
            selected={selectedItems.includes(item.orderDetailId)}
            onSelect={() => handleItemSelect(item.orderDetailId)}
          />
        ))}
      </div>

      <div className="bg-white p-4 rounded-t-lg border-t border-gray-50">
        <button
          className="w-full h-[50px] mt-4 py-2 bg-[#ffaa02] text-white font-bold rounded-[20px]"
          onClick={handleCancel}
        >
          Huỷ món
        </button>
      </div>
    </div>
  );
};

export default OrderStatus;
