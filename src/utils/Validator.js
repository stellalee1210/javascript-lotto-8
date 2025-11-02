import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import {
  MIN_PURCHASE_AMOUNT,
  MAX_PURCHASE_AMOUNT,
  LOTTO_NUMBER_COUNT,
} from "../constants/constants.js";
export class Validator {
  static validatePurchaseAmount(amount) {
    try {
      const amountAsNumber = Number(amount);
      if (isNaN(amountAsNumber))
        throw Error(ERROR_MESSAGES.PURCHASE_AMOUNT_NAN);

      if (!Number.isInteger(amountAsNumber))
        throw Error(ERROR_MESSAGES.PURCHASE_AMOUNT_DECIMAL);

      if (amountAsNumber < 0)
        throw Error(ERROR_MESSAGES.PURCHASE_AMOUNT_NEGATIVE);

      if (
        amountAsNumber % MIN_PURCHASE_AMOUNT !== 0 &&
        amountAsNumber < MIN_PURCHASE_AMOUNT
      )
        throw Error(ERROR_MESSAGES.PURCHASE_AMOUNT_BELOW_1000);

      if (amountAsNumber % MIN_PURCHASE_AMOUNT !== 0)
        throw Error(ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISION);

      if (amountAsNumber > MAX_PURCHASE_AMOUNT)
        throw Error(ERROR_MESSAGES.PURCHASE_AMOUNT_OVER_LIMIT);
    } catch (error) {
      throw Error(error.message);
    }
  }

  static validateWinningNumber(numbers) {
    try {
      if (numbers.length === 0)
        throw Error(ERROR_MESSAGES.WINNING_NUMBER_EMPTY);

      if (numbers.length !== LOTTO_NUMBER_COUNT)
        throw Error(ERROR_MESSAGES.WINNING_NUMBER_NOT_6_DIGITS);

      const ifNaNValues = numbers.some((v) => isNaN(v));
      if (ifNaNValues) throw Error(ERROR_MESSAGES.WINNING_NUMBER_NAN);

      const ifOutOfBoundValues = numbers.some((v) => v > 45 || v <= 0);
      if (ifOutOfBoundValues)
        throw Error(ERROR_MESSAGES.WINNING_NUMBER_OVER_LIMIT);

      const arrayToSet = new Set(numbers);
      if (arrayToSet.size !== numbers.length)
        throw Error(ERROR_MESSAGES.WINNING_NUMBER_DUPLIATE);
    } catch (error) {
      throw Error(error.message);
    }
  }
}
