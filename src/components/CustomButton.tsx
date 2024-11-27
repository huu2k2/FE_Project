interface CustomButtonProps {
  title: string;
  bgColor: string;
  onClick?: any;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  bgColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className={`w-full h-full text-white text-2xl font-bold p-2 border rounded-full hover:bg-[#FFAA02]/80`}>
      {title}
    </button>
  );
};
