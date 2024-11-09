interface CustomButtonProps {
  title: string;
  bgColor: string;
  onClick?: () => void;
  Width:string;
 
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  bgColor,
  onClick,
  Width="w-[632px]",
 
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      style={{ backgroundColor: bgColor }}
      className={`${Width} h-[93px]   text-white text-3xl font-bold px-4 rounded-lg hover:bg-[#FFAA02]/80`}
    >
      {title}
    </button>
  );
};
