import { readPurchaseAmount } from "./view/input.js";
import { Validator } from "./utils/Validator.js";

export class LottoSimulator {
  #purchaseAmount;
  constructor() {
    this.#purchaseAmount = this.getPurchaseAmount();
  }

  async getPurchaseAmount() {
    try {
      const purchaseAmount = await readPurchaseAmount(); //구입 금액 입력 읽어오기
      Validator.validatePurchaseAmount(purchaseAmount);
    } catch (error) {
      throw Error(error);
    }
  }
}
