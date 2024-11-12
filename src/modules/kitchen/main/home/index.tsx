import { useEffect, useState } from "react";
import { CustomButton } from "../../../../components/CustomButton";
import { CustomCheckbox } from "../../../../components/CustomCheckbox";
import { OrderItem } from "../../../../components/OrderItem";
import { ReasonForm } from "./components/form";

const data = [
  {
    id: "1",
    img: "https://res.cloudinary.com/duoqtvvff/image/upload/v1722355413/upload_image/wtlgef0wdfl5j8zkntjd.jpg",
    name: "Cá khô kho đồng",
    price: 45000,
    quantity: 2,
    status: "chưa làm",
  },
  {
    id: "2",
    img: "https://res.cloudinary.com/duoqtvvff/image/upload/v1722355413/upload_image/wtlgef0wdfl5j8zkntjd.jpg",
    name: "Cá khô kho đồng",
    price: 45000,
    quantity: 2,
    status: "chưa làm",
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/duoqtvvff/image/upload/v1722355413/upload_image/wtlgef0wdfl5j8zkntjd.jpg",
    name: "Cá khô kho đồng",
    price: 45000,
    quantity: 2,
    status: "chưa làm",
  },
];

export const ListItemProductPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mapIsActive, setMapIsActive] = useState<Map<string, boolean>>(
    new Map(data.map((item) => [item.id.toString(), false]))
  );
  const [isAllActive, setIsAllActive] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
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

  const handleCOnfirm = () => {
    console.log("Active items:", activeItems());
  };

  const handleFinish = () => {
    console.log("Active items:", activeItems());
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
              onClick={() => handleCOnfirm()}
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
            key={item.id}
            {...item}
            isActive={mapIsActive.get(item.id.toString()) || false}
            onToggle={() => handleItemToggle(item.id.toString())}
          />
        ))}
      </div>
      {isModalOpen && (
        <ReasonForm data={activeItems()} closeModal={handleModalClose} />
      )}
    </div>
  );
};

export default ListItemProductPage;
