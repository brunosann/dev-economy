export const formatDate = (dateValue) => {
  function addZero(number) {
    if (number <= 9) return "0" + number;
    else return number;
  }
  const date = new Date(dateValue);
  const formattedDate =
    addZero(date.getDate().toString()) +
    "/" +
    addZero(date.getMonth() + 1).toString() +
    "/" +
    date.getFullYear();
  return formattedDate;
};
