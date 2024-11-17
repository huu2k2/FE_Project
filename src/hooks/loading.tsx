import React, { createContext, useState, useContext } from "react";

// Định nghĩa kiểu dữ liệu cho Context
interface LoadingContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Tạo Context với giá trị mặc định
const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined
);

// Tạo Provider để bọc ứng dụng
export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Hook để sử dụng LoadingContext
export const useLoading = (): LoadingContextProps => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
