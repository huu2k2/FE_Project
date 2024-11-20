import { useEffect, useState } from "react";
import { CustomButton } from "../../../../components/CustomButton";
import { CustomCheckbox } from "../../../../components/CustomCheckbox";
import { OrderItem } from "../../../../components/OrderItem";
import { ReasonForm } from "./components/form";
import { useParams } from "react-router-dom";
import { getOrderDetailByOrderIdKitchen } from "../../../../services/order-detail-service";
import { OrderDetailModel } from "../../../../models/orderdetail";
import { handleReceiveMess, handleSendMess } from "../../../../hooks/fc.socket";
import useCheffSocket from "../../../../hooks/useCheffSocket";

export const ListItemProductPage: React.FC = () => {
  const cheffSocke = useCheffSocket();

  const { orderId } = useParams<{ orderId: string }>();

  const [data, setData] = useState<OrderDetailModel[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [mapIsActive, setMapIsActive] = useState<Map<string, boolean>>(
    new Map()
  );

  const [isAllActive, setIsAllActive] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    setMapIsActive(
      new Map(data.map((item) => [item.orderDetailId!.toString(), false]))
    );
  }, [data]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const result = await getOrderDetailByOrderIdKitchen(orderId!);
        setData(result.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  useEffect(() => {
    if (!cheffSocke) return;
    handleReceiveMess(
      cheffSocke!,
      "getUpdateOrdersDetailFromCheff",
      ({
        mess,
        result,
        updateType,
      }: {
        mess: string;
        result: any[];
        updateType: number;
      }) => {
        console.log(mess);
        if (mess === "error update") {
          return;
        }
        if (updateType === 1) {
          setData((prevData) =>
            prevData.map((item) => {
              const updatedItem = result.find(
                (res) => res.orderDetailId === item.orderDetailId
              );
              return updatedItem ? { ...item, ...updatedItem } : item;
            })
          );
        } else {
          setData((prevData) =>
            prevData.filter(
              (item) =>
                !result.some((res) => res.orderDetailId === item.orderDetailId)
            )
          );
        }
      }
    );

    handleReceiveMess(
      cheffSocke!,
      "updateOrderDetails",
      (val: OrderDetailModel[]) => {
        console.log("Received updated order details:", val);

        setData((prevData) => {
          // Tạo bản sao của `prevData` để cập nhật
          let updatedData = [...prevData];

          // Duyệt qua từng `val` để cập nhật
          val.forEach((updateItem) => {
            const index = updatedData.findIndex(
              (item) => item.orderDetailId === updateItem.orderDetailId
            );

            if (index !== -1) {
              // Nếu tồn tại, cập nhật quantity
              updatedData[index].quantity = updateItem.quantity;

              // Nếu quantity = 0, xóa phần tử khỏi mảng
              if (updateItem.quantity === 0) {
                updatedData.splice(index, 1);
              }
            } else {
              // Nếu không tồn tại, thêm mới vào mảng (nếu quantity > 0)
              if (updateItem.quantity! > 0) {
                updatedData.push(updateItem);
              }
            }
          });

          return updatedData;
        });
      }
    );

    handleReceiveMess(cheffSocke!, "cancelOrderDetails", (val: string[]) => {
      setData((prevData) => {
        // Lọc bỏ các phần tử trong prevData có id trùng với id trong val
        const updatedData = prevData.filter(
          (item) =>
            !val.some((cancelItemId) => cancelItemId === item.orderDetailId)
        );
        return updatedData;
      });
    });

    handleReceiveMess(
      cheffSocke!,
      "sendOrderDetailForCheff",
      (val: OrderDetailModel[]) => {
        console.log("Hello", val);
        setData((prevDatas) => [...prevDatas, ...val]);
      }
    );
  }, [cheffSocke]);

  useEffect(() => {
    if (mapIsActive.size === 0) {
      setIsAllActive(false);
      return;
    }
    const allActive = Array.from(mapIsActive.values()).every((value) => value);
    setIsAllActive(allActive);
  }, [mapIsActive]);

  const handleCheckboxChange = () => {
    const newMap = new Map(mapIsActive);
    const newActiveStatus = !isAllActive;
    newMap.forEach((_, key) => newMap.set(key, newActiveStatus));
    setMapIsActive(newMap);
  };

  const handleItemToggle = (id: string) => {
    const newMap = new Map(mapIsActive);
    newMap.set(id, !mapIsActive.get(id));
    setMapIsActive(newMap);
  };

  const handleConfirm = () => {
    handleSendMess(cheffSocke!, "updateOrdersDetailFromCheff", {
      orderId: orderId,
      orderDetailIds: activeItems(),
      updateType: 1,
    });
  };

  const handleFinish = () => {
    handleSendMess(cheffSocke!, "updateOrdersDetailFromCheff", {
      orderId: orderId,
      orderDetailIds: activeItems(),
      updateType: 2,
    });
  };

  const handleCancel = (reason: string) => {
    handleSendMess(cheffSocke!, "updateOrdersDetailFromCheff", {
      orderId: orderId,
      orderDetailIds: activeItems(),
      updateType: 0,
    });
    handleSendMess(cheffSocke!, "cancelOrders", {
      orderId: orderId,
      orderDetailIds: activeItems(),
      reason: reason,
    });
    handleModalClose();
  };

  const activeItems = (): string[] => {
    return Array.from(mapIsActive.entries())
      .filter(([_, value]) => value)
      .map(([key]) => key);
  };

  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="flex justify-between pt-6 border-t-2 px-5">
        <div className="flex items-center" onClick={handleCheckboxChange}>
          <CustomCheckbox isAllActive={isAllActive} />
          <span className="ml-[4px] text-backgroundColor cursor-pointer font-medium">
            Chọn Tất cả
          </span>
        </div>
        <div className="flex w-[60%] h-[50px] justify-between">
          <div className="w-[32%]">
            <CustomButton
              bgColor="#008000"
              title="Hoàn thành"
              onClick={handleFinish}
            />
          </div>
          <div className="w-[32%]">
            <CustomButton
              bgColor="#FFAA02"
              title="Xác nhận nấu"
              onClick={() => handleConfirm()}
            />
          </div>
          <div className="w-[32%]">
            <CustomButton
              bgColor="#CC0E0E"
              title="Huỷ nấu"
              onClick={handleModalOpen}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 max-h-[500px] overflow-y-auto rounded-lg px-5">
        {data.map((item) => (
          <OrderItem
            id={item.orderDetailId!}
            img={item.product!.image}
            price={item.price!}
            quantity={item.quantity!}
            status={item.status!}
            name={item.product!.name}
            key={item.orderDetailId}
            {...item}
            isActive={mapIsActive.get(item.orderDetailId!.toString()) || false}
            onToggle={() => handleItemToggle(item.orderDetailId!.toString())}
          />
        ))}
      </div>
      {isModalOpen && (
        <ReasonForm
          data={activeItems()}
          closeModal={handleModalClose}
          handleCancel={(message) => handleCancel(message)}
        />
      )}
    </div>
  );
};

export default ListItemProductPage;
