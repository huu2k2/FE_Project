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
          <button
            type="submit"
            className={` w-[200px] py-2 text-white text-sm font-bold px-4 rounded-lg hover:bg-[#FFAA02]/80 bg-[#FFAA02]`}
          >
            Đăng xuất
          </button>
        </div>
      </nav>
    </>
  );
};
