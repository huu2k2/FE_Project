import { CustomerHeader } from "../../../../components/CustomerHeader";
import { NotificationItem } from "../../../../components/NotificationItem";

export const NotificaationComponent: React.FC = () => {
  const data = [
    {
      title: "Món đã xác nhận",
      description:
        "Món ăn “Hủ tiếu kho” của bạn đang được nấu.Món ăn “Hủ tiếu kho” của bạn đang được nấu.Món ăn “Hủ tiếu kho” của bạn đang được nấu.",
      timestamp: "27/10/2024 16:40pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },

    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },

    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
    {
      title: "Món đã huỷ",
      description: "Bếp không đủ nguyên liệu.",
      timestamp: "27/10/2024 15:30pm",
    },
  ];

  return (
    <>
      <div className="p-4 mt-6">
        <CustomerHeader isBack={true} title="Thông báo"></CustomerHeader>
        <div className="flex gap-2 flex-col mt-4">
          {data.map((item, index) => (
            <NotificationItem data={item}></NotificationItem>
          ))}
        </div>
      </div>
    </>
  );
};
