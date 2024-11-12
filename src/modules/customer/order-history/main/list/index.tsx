import { CustomerHeader } from "../../../../../components/CustomerHeader";
import { HistoryOrderItem } from "../../../../../components/HistoryOrderItem";

export const ListComponent: React.FC = () => {
  const data = [
    {
      id: "asd",
      title: "Bàn A02",
      description: "Món ăn “Hủ tiếu của bạn đang được nấu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },

    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },

    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },

    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
    {
      id: "asdd",
      title: "Bàn A03",
      description: "Bếp không đủ nguyên liệu. 27/10/2024 16:40pm",
    },
  ];

  return (
    <>
      <CustomerHeader
        isBack={true}
        title="Lịch sử đơn gọi"
        bg="white"
      ></CustomerHeader>
      <div className="flex flex-col mt-[40px]">
        {data.map((item, index) => (
          <HistoryOrderItem data={item}></HistoryOrderItem>
        ))}
      </div>
    </>
  );
};
