import { Key, useEffect, useState } from "react";
import { CustomerHeader } from "../../../../components/CustomerHeader";
import { NotificationItem } from "../../../../components/NotificationItem";
import {
  getAllNotificationById,
  GetNotficationInput,
  TypeGet,
} from "../../../../services/notification-service";
import { decodeToken } from "../../../../utils/decode-token";
import { useLoading } from "../../../../hooks/loading";

export const NotificaationComponent: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const { setIsLoading } = useLoading();
  useEffect(() => {
    const fetchApiNotification = async () => {
      try {
        console.log('Starting fetchApiNotification...');
        const token = localStorage.getItem('token');
        if (!token) {
          console.log('No token found in localStorage.');
          setIsLoading(false);
          return;
        }
  
        console.log('Token found:', token);
        const user = decodeToken(token);
        console.log('Decoded user:', user);
  
        if (!user?.customerId) {
          console.log('Invalid user ID:', user);
          setIsLoading(false);
          return;
        }
  
        const query: GetNotficationInput = {
          type: TypeGet.RECEIVER,
          senderId: user.customerId,
        };
  
        console.log('Query for API:', query);
        const ks = await getAllNotificationById(query);
        console.log('API response:', ks);
  
        setData(ks);
      } catch (err) {
        console.error('Error in fetchApiNotification:', err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchApiNotification();
  }, []);

  console.log("data ===========" ,data)
  return (
    <>
      <div className="p-4 mt-6 min-h-screen mb-[40px]">
        <CustomerHeader
          isBack={false}
          title="Thông báo"
          bg="white"
        ></CustomerHeader>
        <div className="flex flex-col mt-4">
          {data.map((item: { content: string; status: string; createdAt: string; }, index: Key | null | undefined) => (
            <NotificationItem key={index} data={item}></NotificationItem>
          ))}
        </div>
      </div>
    </>
  );
};
