import { useNavigate } from "react-router-dom";

interface BottomNavItem {
  path: string;
  content: React.ReactNode;
}

export const BottomNavItem: React.FC<BottomNavItem> = ({
  content,
  path,
}: BottomNavItem) => {
  const navigate = useNavigate();
  return (
    <>
      <a
        className="text-3xl text-black hover:text-backgroundColor"
        onClick={() => navigate(`/${path}`)}
      >
        {content}
      </a>
    </>
  );
};
