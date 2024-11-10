interface CustomerHeaderProps {
  title: string;
  isBack: boolean;
}

export const CustomerHeader: React.FC<CustomerHeaderProps> = ({
  title,
  isBack,
}) => {
  return (
    <div className="flex justify-between">
      <div>
        {isBack ? (
          <button className="text-3xl text-black" onClick={() => {}}>
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
