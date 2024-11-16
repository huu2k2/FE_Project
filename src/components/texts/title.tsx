interface TitleTextProps {
  name: string;
}
export const TitleText: React.FC<TitleTextProps> = ({ name }) => {
  return (
    <>
      <h1
        className="text-lg text-black font-bold mb-4 w-[261] h-[50px]"
        style={{ fontSize: "25px" }}
      >
        {name}
      </h1>
    </>
  );
};
