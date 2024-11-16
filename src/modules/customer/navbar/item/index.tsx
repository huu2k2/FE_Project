import { useLocation, useNavigate } from "react-router-dom";

interface BottomNavItem {
  path: string;
  content: React.ReactNode;
}

export const BottomNavItem: React.FC<BottomNavItem> = ({
  content,
  path,
}: BottomNavItem) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === `/${path}`;
  return (
    <>
      <a
        className={`text-3xl ${
          isActive ? "text-backgroundColor" : "text-black"
        } hover:text-backgroundColor`}
        onClick={() => navigate(`/${path}`)}
      >
        {content}
      </a>
    </>
  );
};
