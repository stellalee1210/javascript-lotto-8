import {
  readBonusNumber,
  readPurchaseAmount,
  readWinningNumber,
} from "./view/input.js";
import {
  printLottoTickets,
  printResult,
  printProfitRate,
  printError,
} from "./view/output.js";
import {
  PurchaseAmountError,
  WinningNumberError,
  BonusNumberError,
} from "./Error/Errors.js";

import { Validator } from "./utils/Validator.js";
import { LottoGame } from "./model/LottoGame.js";
import { parser } from "./utils/parser.js";

export class LottoSimulator {
  #purchaseAmount;
  #winningNumber;
  #bonusNumber;

  constructor() {}

  async startLotto() {
    await this.#readPurchaseAmount();
    const lottoTickets = LottoGame.generateLottoNumbers(this.#purchaseAmount);
    printLottoTickets(lottoTickets);

    await this.#readWinningNumber();
    await this.#readBonusNumber();

    const matchResults = LottoGame.calculateWinningNumber(
      lottoTickets,
      this.#winningNumber,
      this.#bonusNumber
    );
    printResult(matchResults);

    const profitRate = LottoGame.calculateProfitRate(
      matchResults,
      this.#purchaseAmount
    );
    printProfitRate(profitRate);
  }

  async #readPurchaseAmount() {
    try {
      const purchaseAmountInput = await readPurchaseAmount(); //구입 금액 입력 읽어오기
      Validator.validatePurchaseAmount(purchaseAmountInput);
      this.#purchaseAmount = purchaseAmountInput;
    } catch (error) {
      printError(error.message);
      if (error instanceof PurchaseAmountError)
        await this.#readPurchaseAmount();
    }
  }

  async #readWinningNumber() {
    try {
      const winningNubmerInput = await readWinningNumber();
      const parsedWinnningNumber = parser(winningNubmerInput);
      Validator.validateWinningNumber(parsedWinnningNumber);
      this.#winningNumber = parsedWinnningNumber;
    } catch (error) {
      printError(error.message);
      if (error instanceof WinningNumberError) await this.#readWinningNumber();
    }
  }

  async #readBonusNumber() {
    try {
      const bonusNumberInput = await readBonusNumber();
      Validator.validateBonusNumber(this.#winningNumber, bonusNumberInput);
      this.#bonusNumber = Number(bonusNumberInput);
    } catch (error) {
      printError(error.message);
      if (error instanceof BonusNumberError) await this.#readBonusNumber();
    }
  }
}
