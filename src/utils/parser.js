export const parseWinningNumber = (winningNumbers) => {
  if (winningNumbers.length === 0) return winningNumbers;
  return winningNumbers.split(",").map(Number);
};
