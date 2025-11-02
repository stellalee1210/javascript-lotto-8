import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import {
  PurchaseAmountError,
  WinningNumberError,
  BonusNumberError,
} from "../Error/Errors.js";
import {
  MIN_PURCHASE_AMOUNT,
  MAX_PURCHASE_AMOUNT,
  LOTTO_NUMBER_LENGTH,
  BONUS_NUMBER_LENGTH,
  MAX_LOTTO_NUM,
} from "../constants/constants.js";
import { parser } from "./parser.js";

export class Validator {
  static validatePurchaseAmount(amount) {
    const amountAsNumber = Number(amount);
    if (isNaN(amountAsNumber))
      throw new PurchaseAmountError(ERROR_MESSAGES.PURCHASE_AMOUNT_NAN);

    if (!Number.isInteger(amountAsNumber))
      throw new PurchaseAmountError(ERROR_MESSAGES.PURCHASE_AMOUNT_DECIMAL);

    if (amountAsNumber < 0)
      throw new PurchaseAmountError(ERROR_MESSAGES.PURCHASE_AMOUNT_NEGATIVE);

    if (
      amountAsNumber % MIN_PURCHASE_AMOUNT !== 0 &&
      amountAsNumber < MIN_PURCHASE_AMOUNT
    )
      throw new PurchaseAmountError(ERROR_MESSAGES.PURCHASE_AMOUNT_BELOW_1000);

    if (amountAsNumber % MIN_PURCHASE_AMOUNT !== 0)
      throw new PurchaseAmountError(ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISION);

    if (amountAsNumber > MAX_PURCHASE_AMOUNT)
      throw new PurchaseAmountError(ERROR_MESSAGES.PURCHASE_AMOUNT_OVER_LIMIT);
  }

  static validateWinningNumber(numbers) {
    if (numbers.length === 0)
      throw new WinningNumberError(ERROR_MESSAGES.WINNING_NUMBER_EMPTY);

    if (numbers.length !== LOTTO_NUMBER_LENGTH)
      throw new WinningNumberError(ERROR_MESSAGES.WINNING_NUMBER_NOT_6_DIGITS);

    const ifNaNValues = numbers.some((v) => isNaN(v));
    if (ifNaNValues)
      throw new WinningNumberError(ERROR_MESSAGES.WINNING_NUMBER_NAN);

    const ifOutOfBoundValues = numbers.some((v) => v > 45 || v <= 0);
    if (ifOutOfBoundValues)
      throw new WinningNumberError(ERROR_MESSAGES.WINNING_NUMBER_OVER_LIMIT);

    const arrayToSet = new Set(numbers);
    if (arrayToSet.size !== numbers.length)
      throw new WinningNumberError(ERROR_MESSAGES.WINNING_NUMBER_DUPLIATE);
  }

  static validateBonusNumber(winningNumbers, bonusNumberString) {
    if (bonusNumberString.length === 0)
      throw new BonusNumberError(ERROR_MESSAGES.BONUS_NUMBER_EMPTY);

    const bonusNumberToArray = parser(bonusNumberString);
    if (bonusNumberToArray.length > BONUS_NUMBER_LENGTH)
      throw new BonusNumberError(ERROR_MESSAGES.BONUS_NUMBER_NOT_1_DIGIT);

    const bonusNumberToNumber = Number(bonusNumberString);
    if (winningNumbers.includes(bonusNumberToNumber))
      throw new BonusNumberError(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);

    if (isNaN(bonusNumberToNumber))
      throw new BonusNumberError(ERROR_MESSAGES.BONUS_NUMBER_NAN);

    if (bonusNumberToNumber > MAX_LOTTO_NUM)
      throw new BonusNumberError(ERROR_MESSAGES.BONUS_NUMBER_OVER_LIMIT);
  }
}
