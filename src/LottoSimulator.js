import { readPurchaseAmount, readWinningNumber } from "./view/input.js";
import { Validator } from "./utils/Validator.js";
import { LottoGame } from "./model/LottoGame.js";
import { printLottoTickets } from "./view/output.js";
import { parseWinningNumber } from "./utils/parser.js";
export class LottoSimulator {
  #purchaseAmount;
  #winningNumber;
  constructor() {
    this.#startLotto();
  }

  async #startLotto() {
    await this.#getPurchaseAmount();
    const lottoTickets = LottoGame.generateLottoNumbers(this.#purchaseAmount);
    printLottoTickets(lottoTickets);

    await this.#getWinningNumber();
  }

  async #getPurchaseAmount() {
    try {
      const purchaseAmountInput = await readPurchaseAmount(); //구입 금액 입력 읽어오기
      Validator.validatePurchaseAmount(purchaseAmountInput);
      this.#purchaseAmount = purchaseAmountInput;
    } catch (error) {
      throw Error(error);
    }
  }

  async #getWinningNumber() {
    try {
      const winningNubmerInput = await readWinningNumber();
      const parsedWinnningNumber = parseWinningNumber(winningNubmerInput);
      Validator.validateWinningNumber(parsedWinnningNumber);
      this.#winningNumber = parsedWinnningNumber;
    } catch (error) {
      throw Error(error);
    }
  }
}
