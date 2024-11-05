interface CustomCheckboxProps {
  isAllActive: boolean;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isAllActive }) => {
 
  return (
    <div className="flex items-center">
      <div
        className={`w-6 h-6 rounded-full border-2 border-transparent cursor-pointer flex items-center justify-center transition-colors duration-300 ${
          isAllActive ? "bg-[#FFAA02]" : "bg-gray-400"
        }`}
      >
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12l5 5L20 7"
            />
          </svg>
        }
      </div>
    </div>
  );
};
