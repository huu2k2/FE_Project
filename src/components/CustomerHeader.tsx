import { useNavigate } from "react-router-dom";

interface CustomerHeaderProps {
  title: string;
  isBack: boolean;
  bg?: string;
}

export const CustomerHeader: React.FC<CustomerHeaderProps> = ({
  title,
  isBack,
  bg,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex justify-between fixed top-0 bg-${bg} left-0 right-0 px-4 pt-4`}
    >
      <div>
        {isBack ? (
          <button
            className="text-3xl text-black"
            onClick={() => {
              navigate(-1);
            }}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        ) : (
          ""
        )}
      </div>

      <h2 className="text-3xl text-backgroundColor font-bold">{title}</h2>
    </div>
  );
};
