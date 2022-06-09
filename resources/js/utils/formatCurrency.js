const formatCurrency = (value) => {
  const formattedValue = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  return formattedValue;
};

export default formatCurrency;
