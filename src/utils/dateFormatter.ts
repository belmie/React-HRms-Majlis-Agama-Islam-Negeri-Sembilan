export const formatDate = (input: string | Date): string => {
  const date = new Date(input);

  return date
    .toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    })
    .replace(",", ""); // buang koma
};
