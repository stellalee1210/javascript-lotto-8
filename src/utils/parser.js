export const parser = (string) => {
  if (string.length === 0) return string;
  return string.split(",").map(Number);
};
