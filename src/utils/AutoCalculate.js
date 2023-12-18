export const AutoCalculateColumn = ({ records = [] }) => {
  let total = 0;
  records.forEach((num) => {
    total += num.Total;
  });
  return total;
};
