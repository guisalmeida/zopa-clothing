export const priceToNumber = (priceString: string) => {
  return Number(priceString.replace("R$ ", "").replace(",", "."));
};

export const priceToStringBr = (priceNumber: number) => {
  return priceNumber.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
};
