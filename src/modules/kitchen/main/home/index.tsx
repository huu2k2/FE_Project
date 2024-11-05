import { useState } from "react";
import { CustomButton } from "../../../../components/CustomButton";
import { CustomCheckbox } from "../../../../components/CustomCheckbox";
import { OrderItem } from "../../../../components/OrderItem";
import { ReasonForm } from "./components/form";

export const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-1 max-h-[500px] overflow-y-auto rounded-lg">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      <div className="flex justify-between pt-6 border-t-2">
        <div className="flex items-center">
          <CustomCheckbox></CustomCheckbox>
          <span className="ml-[4px] text-[#FFAA02]">Chọn Tất cả</span>
        </div>
        <div className="flex w-[60%] h-[36px] justify-between">
          <div className="w-[32%]">
            <CustomButton bgColor="#008000" title="Hoàn thành"></CustomButton>
          </div>
          <div className="w-[32%]">
            <CustomButton bgColor="#FFAA02" title="Xác nhận nấu"></CustomButton>
          </div>
          <div className="w-[32%]">
            <CustomButton
              bgColor="#CC0E0E"
              title="Huỷ nấu"
              onClick={handleModalOpen}
            ></CustomButton>
          </div>
        </div>
      </div>

      {isModalOpen && <ReasonForm closeModal={handleModalClose} />}
    </div>
  );
};

export default HomePage;
