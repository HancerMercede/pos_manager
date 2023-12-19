export const AutoCalculateColumn = ({ products }) => {
  let total = 0;
  products.forEach((num) => {
    total += num.Total;
    console.log(total);
  });
  return total;
};
