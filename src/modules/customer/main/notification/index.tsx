import { useEffect, useState } from "react";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { NotificationItem } from "../../../../components/NotificationItem";
import { NotificationModel } from "../../../../models/notification";
import { getNotifications } from "../../../../services/notification-service";

export const NotificaationComponent: React.FC = () => {
  const [datas, setDatas] = useState<NotificationModel[]>([]);

  useEffect(() => {
    fetchNotification();
  }, []);

  const fetchNotification = async () => {
    try {
      // const token = localStorage.getItem("token")!;
      // const decoded = jwtDecode<{ customerId: string; role: { name: string } }>(
      //   token
      // );
      const result = await getNotifications();
      setDatas(result.data);
    } catch (error) {
      console.error("Error fetching areas: ", error);
    }
  };

  return (
    <>
      <div className="p-4 mt-6 min-h-screen mb-[40px]">
        <CustomerHeader
          isBack={false}
          title="Thông báo"
          bg="white"></CustomerHeader>
        <div className="flex flex-col mt-4">
          {datas.map((item, index) => (
            <NotificationItem key={index} data={item}></NotificationItem>
          ))}
        </div>
      </div>
    </>
  );
};
