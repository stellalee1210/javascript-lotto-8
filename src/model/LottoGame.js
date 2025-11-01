import { Random } from "@woowacourse/mission-utils";
import {
  MIN_LOTTO_NUM,
  MAX_LOTTO_NUM,
  LOTTO_NUMBER_COUNT,
} from "../constants/constants.js";
export class LottoGame {
  static generateLottoNumbers(amount) {
    const tickets = [];

    const numberOfTickets = this.#calculateNumberOfTickets(amount);
    for (let i = 0; i < numberOfTickets; i++) {
      tickets.push(
        Random.pickUniqueNumbersInRange(
          MIN_LOTTO_NUM,
          MAX_LOTTO_NUM,
          LOTTO_NUMBER_COUNT
        )
      );
    }
    return tickets;
  }

  static #calculateNumberOfTickets(amount) {
    return amount / 1000;
  }
}
