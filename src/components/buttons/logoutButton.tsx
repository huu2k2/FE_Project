import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutCustomerService } from "../../services/logout.service";
import { toast } from "react-toastify";

interface TypeDrop {
  type?: string;
}
export const LogoutButton: React.FC<TypeDrop> = ({ type = "staff" }) => {
  const navigate = useNavigate();
  const handleLogout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (type === "client") {

      const tableId = localStorage.getItem("tableId") as string;
      const orderId = localStorage.getItem("orderid") as string;
      const rs = await logoutCustomerService({ tableId, orderId });
      if (rs) {
       toast.success("Bàn đã trống!")
      }
      else{
        toast.warn('Bạn chưa thanh toán. Bàn chưa trống!')
      }
      localStorage.removeItem("token");
      navigate(`/login/customer/${tableId}`);
    } else {
      localStorage.removeItem("token");
      navigate("/");
    }
  };
  return (
    <div>
      <button
        onClick={(e: any) => handleLogout(e)}
        className={` w-[200px] py-2 text-white text-sm font-bold px-4 rounded-lg hover:bg-[#FFAA02]/80 bg-[#FFAA02]`}
      >
        Đăng xuất
      </button>
    </div>
  );
};
