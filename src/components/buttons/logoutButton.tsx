import { useNavigate } from "react-router-dom";

 

export const LogoutButton = () => {
    const navigate = useNavigate();
  const handleLogout = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    localStorage.removeItem('token')
    navigate("/");
  }
  return (
    <div>
    <button
      onClick={(e)=>handleLogout(e)}
      className={` w-[200px] py-2 text-white text-sm font-bold px-4 rounded-lg hover:bg-[#FFAA02]/80 bg-[#FFAA02]`}
    >
      Đăng xuất
    </button>
  </div>
  )
}
