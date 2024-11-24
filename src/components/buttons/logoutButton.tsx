import { useNavigate } from "react-router-dom";


export const LogoutButton = ({router}:{router: string}) => {
  const navigate = useNavigate();

  const handleLogout = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    localStorage.removeItem('token')
    navigate(router);
  }
  return (
    <div>
    <button
      onClick={(e:any)=>handleLogout(e)}
      className={` w-[200px] py-2 text-white text-sm font-bold px-4 rounded-lg hover:bg-[#FFAA02]/80 bg-[#FFAA02]`}
    >
      Đăng xuất
    </button>
  </div>
  )
}
