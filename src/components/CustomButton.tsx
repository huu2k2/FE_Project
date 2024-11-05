interface CustomButtonPros {
  title: string;
}

export const CustomButton: React.FC<CustomButtonPros> = ({ title }) => {
  return (
    <>
      <button
        type="submit"
        className="w-full bg-[#FFAA02] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#FFAA02]-dark"
      >
        {title}
      </button>
    </>
  );
};
