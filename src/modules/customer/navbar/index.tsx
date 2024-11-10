import { useNavigate } from "react-router-dom";
import { BottomNavItem } from "./item";

export const NavBar: React.FC = () => {
  const data = [
    {
      id: "1",
      path: "home",
      icon: <i className="fa-solid fa-house"></i>,
    },
    {
      id: "2",
      path: "notification",
      icon: <i className="fa-solid fa-bell"></i>,
    },
    {
      id: "3",
      path: "cart",
      icon: <i className="fa-solid fa-cart-shopping"></i>,
    },
    {
      id: "4",
      path: "person",
      icon: <i className="fa-solid fa-user-large"></i>,
    },
  ];
  return (
    <>
      <nav className="bg-[#D9D9D9] h-[8%] p-2 flex justify-around items-center">
        {data.map((item, index) => (
          <BottomNavItem
            key={index}
            path={item.path}
            content={item.icon}
          ></BottomNavItem>
        ))}
      </nav>
    </>
  );
};
