import { Random } from "@woowacourse/mission-utils";
import {
  MIN_LOTTO_NUM,
  MAX_LOTTO_NUM,
  LOTTO_NUMBER_LENGTH,
  MIN_MATCHING_VALUE,
} from "../constants/constants.js";
import { Lotto } from "../Lotto.js";
import { PRIZE_AMOUNT } from "../constants/constants.js";

export class LottoGame {
  static generateLottoNumbers(amount) {
    const tickets = [];

    const numberOfTickets = this.#calculateNumberOfTickets(amount);
    for (let i = 0; i < numberOfTickets; i++) {
      const randomNumArray = Random.pickUniqueNumbersInRange(
        MIN_LOTTO_NUM,
        MAX_LOTTO_NUM,
        LOTTO_NUMBER_LENGTH
      );
      const sortedRandomArray = randomNumArray.sort((a, b) => a - b);

      tickets.push(new Lotto(sortedRandomArray));
    }
    return tickets;
  }

  static #calculateNumberOfTickets(amount) {
    return amount / 1000;
  }

  static calculateWinningNumber(lottoTickets, winningNumber, bonusNumber) {
    const winningNumberSet = new Set(winningNumber);
    let result = new Array(5).fill(0);

    for (const ticket of lottoTickets) {
      const lottoNumberArray = ticket.lottoNumbers;
      let matchingNumberCount = lottoNumberArray.filter((v) =>
        winningNumberSet.has(v)
      ).length;
      if (matchingNumberCount < MIN_MATCHING_VALUE) continue;

      if (lottoNumberArray.includes(bonusNumber) || matchingNumberCount === 6)
        matchingNumberCount += 1;

      const index = matchingNumberCount - MIN_MATCHING_VALUE;
      result[index] += 1;
    }
    return result;
  }

  static calculateProfitRate(matchResult, purchaseAmount) {
    const totalExpense = Number(purchaseAmount);
    const resultToMoney = matchResult.map((v, i) => v * PRIZE_AMOUNT[i]);
    const totalProfit = resultToMoney.reduce((acc, cur) => acc + cur);
    if (totalProfit === 0) return 0;

    const profitRate = Number(((totalProfit / totalExpense) * 100).toFixed(1));
    return profitRate;
  }
}
