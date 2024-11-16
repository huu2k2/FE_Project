import React from "react";

interface PaginationPros {
  currentPageNumber: number;
  totalPageNumber: number;
  offset: number;
  goToPage: (page: number | string) => void;
}

export const Pagination: React.FC<PaginationPros> = ({
  currentPageNumber,
  totalPageNumber,
  offset,
  goToPage,
}) => {
  const getPaginationGenerator = () => {
    const offsetNumber =
      currentPageNumber <= offset ||
      currentPageNumber > totalPageNumber - offset
        ? offset
        : offset - 1;

    const numbersList = [];
    const numbersListWithDots: (string | number)[] = [];

    if (totalPageNumber <= 1 || totalPageNumber === undefined) return [1];

    numbersList.push(1);
    for (
      let i = currentPageNumber - offsetNumber;
      i <= currentPageNumber + offsetNumber;
      i++
    ) {
      if (i < totalPageNumber && i > 1) {
        numbersList.push(i);
      }
    }
    numbersList.push(totalPageNumber);

    numbersList.reduce((accumulator, currentValue) => {
      if (accumulator === 1) {
        numbersListWithDots.push(accumulator);
      }
      if (currentValue - accumulator !== 1) {
        numbersListWithDots.push("...");
      }
      numbersListWithDots.push(currentValue);
      return currentValue;
    });

    return numbersListWithDots;
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-[12px] py-[6px] min-w-[40px] rounded-full bg-backgroundColor text-white hover:bg-[#5c9e8d] transition duration-300 ease-in-out ${
          currentPageNumber === 1 ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPageNumber === 1}
        onClick={() => goToPage(1)}
      >
        <i className="fa-solid fa-angles-left"></i>
      </button>

      <button
        className={`px-[12px] py-[6px] min-w-[40px] rounded-full bg-backgroundColor text-white hover:bg-[#5c9e8d] transition duration-300 ease-in-out ${
          currentPageNumber === 1 ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPageNumber === 1}
        onClick={() => goToPage(currentPageNumber - 1)}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>

      {getPaginationGenerator().map((page, index) => (
        <button
          key={index}
          className={`px-[12px] py-[6px] min-w-[40px] rounded-full  text-white hover:bg-[#5c9e8d] transition duration-300 ease-in-out ${
            page === currentPageNumber ? "bg-[#5c9e8d]" : "bg-backgroundColor"
          }`}
          onClick={() => goToPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={`px-[12px] py-[6px] min-w-[40px] rounded-full bg-backgroundColor text-white hover:bg-[#5c9e8d] transition duration-300 ease-in-out ${
          currentPageNumber === totalPageNumber ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPageNumber === totalPageNumber}
        onClick={() => goToPage(currentPageNumber + 1)}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>

      <button
        className={`px-[12px] py-[6px] min-w-[40px] rounded-full bg-backgroundColor text-white hover:bg-[#5c9e8d] transition duration-300 ease-in-out ${
          currentPageNumber === totalPageNumber ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPageNumber === totalPageNumber}
        onClick={() => goToPage(totalPageNumber)}
      >
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
