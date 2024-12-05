import { useEffect, useState } from "react";
import { BottomNavItem } from "./item";
import { useCart } from "../../../hooks/addTotalContext";

const data = [
  {
    id: "1",
    path: "home",
    icon: <i className="fa-solid fa-house"></i>,
    isIndicator: false,
  },
  {
    id: "2",
    path: "notification",
    icon: <i className="fa-solid fa-bell"></i>,
    isIndicator: false,
  },
  {
    id: "3",
    path: "cart",
    icon: <i className="fa-solid fa-cart-shopping"></i>,
    isIndicator: true,
  },
  {
    id: "4",
    path: "person",
    icon: <i className="fa-solid fa-user-large"></i>,
    isIndicator: false,
  },
];

export const NavBar: React.FC = () => {
  const context = useCart();
  const updateTotalProducts = () => {
    const cart = JSON.parse(localStorage.getItem("cart") as string) || [];
    const total = cart.reduce(
      (acc: any, next: { quantity: any }) => acc + next.quantity,
      0
    );

    context.setSum(total)
  };

  useEffect(() => {
    updateTotalProducts();

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        updateTotalProducts();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="fixed bottom-0 w-full h-[8%]">
      <nav className="bg-[#D9D9D9] h-full p-2 flex justify-around items-center">
        {data.map((item, index) => (
          <div key={index} className="indicator">
            {item.isIndicator && context.sum > 0 && (
              <span className="indicator-item badge badge-secondary">
                {context.sum }
              </span>
            )}
            <BottomNavItem path={item.path} content={item.icon} />
          </div>
        ))}
      </nav>
    </div>
  );
};
