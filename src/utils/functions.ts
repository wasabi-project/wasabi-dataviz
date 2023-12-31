export const formatNumber = (number: number) => {
  if (number === undefined) return 0;
  if (number === 0) return 0;
  if (number < 1000) {
    return number;
  } else if (number < 1000000) {
    return (number / 1000).toFixed(1) + "k";
  } else if (number < 1000000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else {
    return (number / 1000000000).toFixed(1) + "B";
  }
};
