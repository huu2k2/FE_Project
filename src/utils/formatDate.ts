export const formatDate = (date: Date): string => {
  if (date) {
    const updatedAt = new Date(date); // Ensure it's a Date object
    const day = String(updatedAt.getDate()).padStart(2, "0"); // Pad day with leading zero
    const month = String(updatedAt.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = updatedAt.getFullYear();
    const hours = String(updatedAt.getHours()).padStart(2, "0"); // Pad hours with leading zero
    const minutes = String(updatedAt.getMinutes()).padStart(2, "0"); // Pad minutes with leading zero

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    return formattedDate;
  } else {
    return "err";
  }
};
