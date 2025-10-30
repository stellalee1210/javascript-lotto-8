const ERROR_PREFIX = "[ERROR]";
const TRY_PURCHASE_AGAIN =
  "1000원 이상의 양수로 다시 입력해주세요.\n 1000원 단위로 구매 가능합니다.";
const TRY_WINNING_PRICE_AGAIN =
  "1 ~ 45 사이의 숫자를 중복 없이 6개 다시 입력해주세요.";
const TRY_BONUS_NUMBER_AGAIN =
  "1 ~ 45 사이의 숫자를 당첨 번호와 중복되지 않게 1개 다시 입력해주세요.";
export const ERROR_MESSAGES = Object.freeze({
  PURCHASE_AMOUNT_NAN: `${ERROR_PREFIX} 입력하신 구입 금액이 문자입니다. ${TRY_PURCHASE_AGAIN}`,
  PURCHASE_AMOUNT_BELOW_1000: `${ERROR_PREFIX} 입력하신 구입 금액이 1000원 이하입니다. ${TRY_PURCHASE_AGAIN}`,
  PURCHASE_AMOUNT_NEGATIVE: `${ERROR_PREFIX} 입력하신 구입 금액이 음수입니다. ${TRY_PURCHASE_AGAIN}`,
  PURCHASE_AMOUNT_DECIMAL: `${ERROR_PREFIX} 입력하신 구입 금액이 소수입니다. ${TRY_PURCHASE_AGAIN}`,
  PURCHASE_AMOUNT_DIVISION: `${ERROR_PREFIX} 입력하신 구입 금액이 1000원 단위가 아닙니다. ${TRY_PURCHASE_AGAIN}`,
  PURCHASE_AMOUNT_OVER_LIMIT: `${ERROR_PREFIX} 입력하신 구입 금액이 한도인 10만원을 넘어섰습니다. ${TRY_PURCHASE_AGAIN}`,

  WINNING_NUMBER_DUPLIATE: `${ERROR_PREFIX} 입력하신 당첨 번호가 중복됩니다. ${TRY_WINNING_PRICE_AGAIN}`,
  WINNING_NUMBER_NOT_6_DIGITS: `${ERROR_PREFIX} 입력하신 당첨 번호가 6자리가 아닙니다. ${TRY_WINNING_PRICE_AGAIN}`,
  WINNING_NUMBER_NAN: `${ERROR_PREFIX} 입력하신 당첨 번호가 숫자가 아닙니다. ${TRY_WINNING_PRICE_AGAIN}`,
  WINNING_NUMBER_OVER_LIMIT: `${ERROR_PREFIX} 입력하신 당첨 번호가 범위를 벗어났습니다. ${TRY_WINNING_PRICE_AGAIN}`,
  WINNING_NUMBER_EMPTY: `${ERROR_PREFIX} 입력하신 당첨 번호가 비어있습니다. ${TRY_WINNING_PRICE_AGAIN}`,

  BONUS_NUMBER_DUPLICATE: `${ERROR_PREFIX} 입력하신 보너스 번호가 당첨 번호와 중복됩니다. ${TRY_BONUS_NUMBER_AGAIN}`,
  BONUS_NUMBER_NOT_1_DIGIT: `${ERROR_PREFIX} 입력하신 보너스 번호가 1개가 아닙니다. ${TRY_BONUS_NUMBER_AGAIN}`,
  BONUS_NUMBER_NAN: `${ERROR_PREFIX} 입력하신 보너스 번호가 숫자가 아닙니다. ${TRY_BONUS_NUMBER_AGAIN}`,
  BONUS_NUMBER_OVER_LIMIT: `${ERROR_PREFIX} 입력하신 보너스 번호가 범위를 벗어났습니다. ${TRY_BONUS_NUMBER_AGAIN}`,
  BONUS_NUMBER_EMPTY: `${ERROR_PREFIX} 입력하신 보너스 번호가 비어있습니다. ${TRY_BONUS_NUMBER_AGAIN}`,
});
