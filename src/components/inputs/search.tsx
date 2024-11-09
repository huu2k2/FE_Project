interface SearchInputProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const SearchInput: React.FC<SearchInputProps> = ({
  handleSearch,
  value,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Tìm kiếm ...."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
        className="bg-gray-300 px-4 py-2 w-[318px] font-bold h-[50px] text-lg text-black placeholder-gray-500 outline-none"
        style={{ borderRadius: "25px" }}
      />
    </>
  );
};
