import { useEffect, useState } from "react";
import { LogoutButton } from "../../../components/buttons/logoutButton";
import { CustomerModel } from "../../../models/customer";
import { getCustomerById } from "../../../services/customer-service";
import { jwtDecode } from "jwt-decode";
import { handleSendMess } from "../../../hooks/fc.socket";
import { getCustomerSocket } from "../../../hooks/useCustomerSocket";

export const Drawer: React.FC = () => {
  const [customerInfor, setCustomerInfor] = useState<CustomerModel>();
  const fetchCustomerInfor = async () => {
    try {
      const token = localStorage.getItem("token")!;
      const decoded = jwtDecode<{ customerId: string; role: { name: string } }>(
        token
      );
      const result = await getCustomerById(decoded.customerId);
      setCustomerInfor(result.data);
    } catch (error) {
      console.error("Error fetching areas: ", error);
    }
  };

  useEffect(() => {
    fetchCustomerInfor();
  }, []);

  const mergeTable = () => {
    const orderId = localStorage.getItem("orderId")!;
    const customerSocket = getCustomerSocket();
    handleSendMess(customerSocket!, "sendMergeTableRequest", orderId);
  };

  return (
    <>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col min-h-full w-80 bg-backgroundColor rounded-r-[30px]">
          {/* Profile Section */}
          <div className="flex flex-col items-center p-4 bg-backgroundColor rounded-r-[30px]">
            <div className="w-24 h-24 rounded-full bg-gray-300"></div>
            <h2 className="mt-2 font-semibold text-white">
              {customerInfor?.name}
            </h2>
          </div>

          {/* Menu Items */}
          <div className="flex-grow bg-white w-full">
            <ul className="menu flex flex-col text-black text-content p-4 space-y-2">
              <li className="flex items-left gap-3 p-2 border-b border-gray-300">
                <a href={`/person`}>
                  <i className="fas fa-user"></i>Hồ sơ
                </a>
              </li>
              <li className="flex items-left gap-3 p-2 border-b border-gray-300">
                <a href={`/order/history`}>
                  <i className="fas fa-history"></i>Lịch sử gọi món
                </a>
              </li>
              <li className="flex items-left gap-3 p-2 border-b border-gray-300">
                {/* Change id */}
                <a href={`/payment/order`}>
                  <i className="fas fa-credit-card"></i>Thanh toán
                </a>
              </li>
              <li className="flex items-left gap-3 p-2 border-b border-gray-300">
                <a href={`/order/status`}>
                  <i className="fas fa-shopping-cart"></i>Trạng thái đơn hiện
                  tại
                </a>
              </li>
              <li className="flex items-left gap-3 p-2 border-b border-gray-300">
                {/* Send notification for staff */}
                <a onClick={() => mergeTable()}>
                  <i className="fas fa-table"></i>Gộp bàn
                </a>
              </li>
            </ul>
          </div>

          {/* Logout Button */}
          <LogoutButton />
        </div>
      </div>
    </>
  );
};
