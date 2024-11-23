import { useEffect, useState } from "react";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { NotificationItem } from "../../../../components/NotificationItem";
import { getAllNotificationById, GetNotficationInput, TypeGet } from "../../../../services/notification-service";
import { decodeToken } from "../../../../utils/decode-token";
import { useLoading } from "../../../../hooks/loading";

export const NotificaationComponent: React.FC = () => {
 const [data, setData] = useState<any>([])
 const {isLoading, setIsLoading} = useLoading()
 useEffect(() => {
  const fetchApiNotification = async () => {
    try {
      // Lấy token từ localStorage và giải mã
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLoading(false);
        return;
      }

      const user = decodeToken(token);
      if (!user?.userId) {
        setIsLoading(false);
        return;
      }

      // Tạo query và gọi API
      const query: GetNotficationInput = {
        type: TypeGet.RECEIVER,
        senderId: user.userId,
      };

      const ks = await getAllNotificationById(query);
      console.log("Notifications:", ks);
      alert("fvbnm")
      // Cập nhật dữ liệu và trạng thái loading
      setData(ks);
    } catch (err) {
      console.error('Error fetching notifications:', err);
 
    } finally {
      setIsLoading(false); // Đảm bảo set loading false khi hoàn thành
    }
  }
  fetchApiNotification()
},[])
  return (
    <>
      <div className="p-4 mt-6 min-h-screen mb-[40px]">
        <CustomerHeader
          isBack={false}
          title="Thông báo"
          bg="white"
        ></CustomerHeader>
        {/* <div className="flex flex-col mt-4">
          {data.map((item, index) => (
            <NotificationItem key={index} data={item}></NotificationItem>
          ))}
        </div> */}
      </div>
    </>
  );
};
