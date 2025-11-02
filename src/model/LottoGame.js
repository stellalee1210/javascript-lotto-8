import { Random } from "@woowacourse/mission-utils";
import {
  MIN_LOTTO_NUM,
  MAX_LOTTO_NUM,
  LOTTO_NUMBER_COUNT,
} from "../constants/constants.js";
import { Lotto } from "../Lotto.js";

export class LottoGame {
  static generateLottoNumbers(amount) {
    const tickets = [];

    const numberOfTickets = this.#calculateNumberOfTickets(amount);
    for (let i = 0; i < numberOfTickets; i++) {
      const randomNumArray = Random.pickUniqueNumbersInRange(
        MIN_LOTTO_NUM,
        MAX_LOTTO_NUM,
        LOTTO_NUMBER_COUNT
      );

      tickets.push(new Lotto(randomNumArray));
    }
    return tickets;
  }

  static #calculateNumberOfTickets(amount) {
    return amount / 1000;
  }
}
