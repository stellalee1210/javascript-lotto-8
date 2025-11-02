import { Random } from "@woowacourse/mission-utils";
import {
  MIN_LOTTO_NUM,
  MAX_LOTTO_NUM,
  LOTTO_NUMBER_LENGTH,
  MIN_MATCHING_VALUE,
} from "../constants/constants.js";
import { Lotto } from "../Lotto.js";
import { PRIZE_AMOUNT } from "../constants/constants.js";
import { Console } from "@woowacourse/mission-utils";

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

      tickets.push(new Lotto(randomNumArray));
    }
    return tickets;
  }

  static #calculateNumberOfTickets(amount) {
    return amount / 1000;
  }

  static calculateWinningNumber(lottoTickets, winningNumber, bonusNumber) {
    const finalWinningNumber = [...winningNumber, bonusNumber]; //당첨 번호와 보너스 번호를 합침
    const winningNumAndBonusNumSet = new Set(finalWinningNumber);
    const result = new Array(5).fill(0);

    for (const ticket of lottoTickets) {
      let bonusNumberState = 0;
      const matching = ticket.lottoNumbers.filter((num) => {
        return winningNumAndBonusNumSet.has(num);
      });

      const matchingCount = matching.length;
      if (matchingCount < MIN_MATCHING_VALUE) continue;
      if (matchingCount === 6 && !ticket.lottoNumbers.includes(bonusNumber))
        bonusNumberState++;

      const index = matchingCount - MIN_MATCHING_VALUE + bonusNumberState;
      result[index]++;
    }

    return result;
  }

  static calculateProfitRate(matchResult, purchaseAmount) {
    const totalExpense = purchaseAmount * 1000;
    const resultToMoney = matchResult.map((v, i) => v * PRIZE_AMOUNT[i]);
    const totalProfit = resultToMoney.reduce((acc, cur) => acc + cur);

    const profitRate = Number(((totalProfit / totalExpense) * 100).toFixed(1));
    return profitRate;
  }
}
