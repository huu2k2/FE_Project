import React, { useEffect, useState } from "react";
import { OrderStatusItem } from "../../../../components/customer/orderStatusItem";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { OrderDetailModel } from "../../../../models/orderdetail";
import useCustomerSocket from "../../../../hooks/useCustomerSocket";
import { handleReceiveMess, handleSendMess } from "../../../../hooks/fc.socket";
import { OrderDetailStatus } from "../../../../enum/enum";

const OrderStatus: React.FC = () => {
  const [items, setItems] = useState<OrderDetailModel[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [status, isStatus] = useState<boolean>(false);

  const customerSocket = useCustomerSocket();

  useEffect(() => {
    if (!customerSocket) return;
    const orderId = localStorage.getItem("orderId");

    handleSendMess(customerSocket!, "requestGetOrderDetails", orderId);

    handleReceiveMess(
      customerSocket!,
      "receiveOrderDetails",
      (val: OrderDetailModel[]) => {
        setItems(val);
      }
    );

    handleReceiveMess(
      customerSocket!,
      "updateOrderDetails",
      (val: OrderDetailModel[]) => {
        setItems(val);
      }
    );

    handleReceiveMess(
      customerSocket!,
      "sendNotification",
      (vals: { mess: string; data: any; status: boolean }) => {
        if (vals.status) {
          handleSendMess(customerSocket!, "requestGetOrderDetails", orderId);
          isStatus(false);
        }
      }
    );

    handleReceiveMess(
      customerSocket!,
      "updateOrderDetailStatusForCustomer",
      (vals: {
        orderId: string;
        orderDetailIds: string[];
        updateType: number;
      }) => {
        console.log("Order status update", vals);
        if (orderId === vals.orderId) {
          let newStatus = OrderDetailStatus.CONFIRMED;
          if (vals.updateType === 0) {
            newStatus = OrderDetailStatus.CANCELED;
          }
          if (vals.updateType === 2) {
            newStatus = OrderDetailStatus.COMPLETED;
          }
          setItems((prevItems) =>
            prevItems.map((item) =>
              vals.orderDetailIds.includes(item.orderDetailId!)
                ? { ...item, status: newStatus }
                : item
            )
          );
        }
      }
    );
  }, [customerSocket]);

  const handleItemSelect = (id: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
    isStatus(false);
  };

  const handleQuantityChange = (id: string, amount: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.orderDetailId === id
          ? { ...item, quantity: Math.max(0, item.quantity! + amount) }
          : item
      )
    );
    isStatus(true);
    setSelectedItems([]);
  };

  const handleCancel = () => {
    const orderId = localStorage.getItem("orderId");
    handleSendMess(customerSocket!, "requestCanleOrderDetail", {
      orderDetails: selectedItems,
      orderId: orderId,
    });
  };

  const handleAjustQuantity = () => {
    const arr = items.filter((item) => item.status == "PENDING");
    handleSendMess(customerSocket!, "requestUpdateOrderDetail", arr);
  };

  return (
    <div className="flex flex-col h-full max-w-md mx-auto bg-white">
      <CustomerHeader
        isBack={true}
        title="Trạng thái đơn gọi"
        bg="white"
      ></CustomerHeader>
      <div className="space-y-2 flex-grow overflow-y-auto mt-[40px]">
        {items.map((item, index) => (
          <OrderStatusItem
            id={item.orderDetailId!}
            key={index}
            name={item.product!.name}
            status={item.status!}
            price={item.price!}
            quantity={item.quantity!}
            imageSrc={item.product!.image}
            selected={selectedItems.includes(item.orderDetailId!)}
            onSelect={() => handleItemSelect(item.orderDetailId!)}
            onQuantityChange={(amount) =>
              handleQuantityChange(item.orderDetailId!, amount)
            }
          />
        ))}
      </div>

      <div className="bg-white p-4 rounded-t-lg border-t border-gray-50">
        {status && (
          <button
            className="w-full h-[50px] mt-4 py-2 bg-[green] text-white font-bold rounded-[20px]"
            onClick={handleAjustQuantity}
          >
            Xác nhận
          </button>
        )}
        {selectedItems.length > 0 && (
          <button
            className="w-full h-[50px] mt-4 py-2 bg-[#ffaa02] text-white font-bold rounded-[20px]"
            onClick={handleCancel}
          >
            Huỷ món
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
