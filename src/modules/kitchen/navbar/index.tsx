import { CustomButton } from "../../../components/CustomButton";
import logo from "../../../assets/logo.png";
export const NavBar: React.FC = () => {
  return (
    <>
      <nav className="bg-[#F4F4F4] text-white p-2 flex justify-between">
        <div className="w-[100px] h-[40px]">
          <img src={logo} alt="Logo" className="h-[100%]" />
        </div>
        <div>
          <CustomButton bgColor="#FFAA02" title="Đăng xuất"></CustomButton>
        </div>
      </nav>
    </>
  );
};
