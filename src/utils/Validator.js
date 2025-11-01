import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import {
  MIN_PURCHASE_AMOUNT,
  MAX_PURCHASE_AMOUNT,
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
}
