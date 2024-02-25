export const formatCurrency = function (value: number) {
  return new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "USD",
  }).format(value);
};
