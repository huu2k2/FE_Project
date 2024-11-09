interface CustomButtonProps {
  title: string;
  bgColor: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  bgColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      style={{ backgroundColor: bgColor }}
      className="w-[632px] h-[93px]   text-white text-3xl font-bold py-2 px-4 rounded-lg hover:bg-[#FFAA02]/80"
    >
      {title}
    </button>
  );
};
