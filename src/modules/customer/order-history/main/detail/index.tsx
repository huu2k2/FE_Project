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
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },

    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },

    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
    },
    {
      id: "asdasd",
      name: "Món đã xác nhận",
      price: 3,
      quantity: 3,
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
      <div className="flex flex-col mt-[40px]">
        {data.map((item, index) => (
          <FinishOrderItem data={item}></FinishOrderItem>
        ))}
      </div>
    </>
  );
};
