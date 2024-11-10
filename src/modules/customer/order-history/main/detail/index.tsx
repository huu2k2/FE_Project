import { CustomerHeader } from "../../../../../components/CustomerHeader";
import { FinishOrderItem } from "../../../../../components/FinishOrderItem";

export const DetailComponent: React.FC = () => {
  const data = [
    {
      id: "asd",
      name: "Món đã xác nhận",
      price: 2,
      quantity: 2,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
  ];

  return (
    <>
      <CustomerHeader
        isBack={true}
        title="Bàn A02 - 27/10/2024"
      ></CustomerHeader>
      <div className="flex gap-2 flex-col mt-4">
        {data.map((item, index) => (
          <FinishOrderItem data={item}></FinishOrderItem>
        ))}
      </div>
    </>
  );
};
