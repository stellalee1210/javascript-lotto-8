import { readPurchaseAmount } from "./view/input.js";
import { Validator } from "./utils/Validator.js";
import { LottoGame } from "./model/LottoGame.js";

export class LottoSimulator {
  #purchaseAmount;
  constructor() {
    this.#startLotto();
  }

  async #startLotto() {
    await this.getPurchaseAmount();
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
