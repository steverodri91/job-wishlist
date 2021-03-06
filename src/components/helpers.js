export const genRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const genRandomColor = () => {
  const min = 50;
  const max = 150;
  let r = genRandomNumber(min, max);
  let g = genRandomNumber(min, max);
  let b = genRandomNumber(min, max);
  return `rgb(${r}, ${g}, ${b})`;
};
