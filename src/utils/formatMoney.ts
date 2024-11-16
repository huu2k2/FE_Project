export const formatCurrency = (value: string): string => {
  const numericValue: string = value.replace(/[^\d]/g, ""); // Lọc bỏ các ký tự không phải là số
  if (numericValue === "") return "0";

  // Định dạng số tiền theo kiểu 'de-DE' (dấu phân cách hàng nghìn là dấu chấm)
  return new Intl.NumberFormat("de-DE").format(Number(numericValue));
};
