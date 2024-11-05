import { CustomCheckbox } from "./CustomCheckbox";
import img from "../assets/product.webp";

export const OrderItem: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-1 w-full h-24">
      <div className="w-10">
        <CustomCheckbox />
      </div>
      <div className="flex flex-1 items-center">
        <div className="w-24 flex justify-center">
          <img src={img} alt="Cá khô kho đồng" className="rounded-lg" />
        </div>
        <div className="flex flex-1 ml-4 flex-col justify-between h-full">
          <div className="flex-grow">
            <span className="font-bold text-lg text-black">
              Cá khô kho đồng
            </span>
          </div>
          <div className="flex-grow">
            <span className="text-sm text-[#FFAA02] font-semibold">
              45.000đ
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-black">Số lượng: 2</span>
            <span className="text-sm text-red-500">Trạng thái: chưa làm</span>
          </div>
        </div>
      </div>
    </div>
  );
};
