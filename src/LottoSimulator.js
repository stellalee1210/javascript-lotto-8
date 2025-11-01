import { readPurchaseAmount } from "./view/input.js";
import { Validator } from "./utils/Validator.js";
import { LottoGame } from "./model/LottoGame.js";
import { printLottoNumbers } from "./view/output.js";

export class LottoSimulator {
  #purchaseAmount;
  constructor() {
    this.#startLotto();
  }

  async #startLotto() {
    await this.getPurchaseAmount();
    const lottoTickets = LottoGame.generateLottoNumbers(this.#purchaseAmount);
    printLottoNumbers(lottoTickets);
  }

  async getPurchaseAmount() {
    try {
      const purchaseAmount = await readPurchaseAmount(); //구입 금액 입력 읽어오기
      Validator.validatePurchaseAmount(purchaseAmount);
      this.#purchaseAmount = purchaseAmount;
    } catch (error) {
      throw Error(error);
    }
  }
}
