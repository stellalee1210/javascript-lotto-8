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
    const winningNumSet = new Set(winningNumber);
    let result = new Array(5).fill(0);

    for (const ticket of lottoTickets) {
      const matching = ticket.lottoNumbers.filter((num) => {
        return winningNumSet.has(num);
      });
      const matchingCount = matching.length;
      if (matchingCount < MIN_MATCHING_VALUE) continue;

      let index = matchingCount - MIN_MATCHING_VALUE;
      if (matchingCount === 6) {
        result[5]++;
        continue;
      }
      if (matchingCount === 5 && ticket.lottoNumbers.includes(bonusNumber)) {
        result[4]++;
        continue;
      }

      result[index]++;
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
