import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { Validator } from "./Validator.js";
import { parseWinningNumber } from "./parser.js";

describe("validator 구입 금액 검증 단위 테스트", () => {
  test("정상 구입 금액", () => {
    expect(() => {
      const lottoPrice = "5000";
      Validator.validatePurchaseAmount(lottoPrice);
    }).not.toThrow();
  });
  test("구입 금액이 1000원으로 나누어 떨어지지 않는 경우", () => {
    expect(() => {
      const lottoPrice = "3900";
      Validator.validatePurchaseAmount(lottoPrice);
    }).toThrow(ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISION);
  });
  test("구입 금액이 숫자가 아닌 경우", () => {
    expect(() => {
      const lottoPrice = "price";
      Validator.validatePurchaseAmount(lottoPrice);
    }).toThrow(ERROR_MESSAGES.PURCHASE_AMOUNT_NAN);
  });
  test("구입 금액이 1000원 미만인 양수인 경우", () => {
    expect(() => {
      const lottoPrice = "900";
      Validator.validatePurchaseAmount(lottoPrice);
    }).toThrow(ERROR_MESSAGES.PURCHASE_AMOUNT_BELOW_1000);
  });
  test("구입 금액이 음수인 경우", () => {
    expect(() => {
      const lottoPrice = "-4000";
      Validator.validatePurchaseAmount(lottoPrice);
    }).toThrow(ERROR_MESSAGES.PURCHASE_AMOUNT_NEGATIVE);
  });
  test("구입 금액이 소수인 경우", () => {
    expect(() => {
      const lottoPrice = "1.5";
      Validator.validatePurchaseAmount(lottoPrice);
    }).toThrow(ERROR_MESSAGES.PURCHASE_AMOUNT_DECIMAL);
  });
  test("구입 금액이 10만원을 넘어가는 경우", () => {
    expect(() => {
      const lottoPrice = "105000";
      Validator.validatePurchaseAmount(lottoPrice);
    }).toThrow(ERROR_MESSAGES.PURCHASE_AMOUNT_OVER_LIMIT);
  });
});

describe("validator 당첨 번호 검증 단위 테스트", () => {
  test("당첨 번호가 6개 이상인 경우", () => {
    expect(() => {
      const winningNumber = "1, 3, 5, 6, 7, 8, 9";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      Validator.validateWinningNumber(parsedWinnningNumber);
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBER_NOT_6_DIGITS);
  });
  test("당첨 번호가 중복인 경우", () => {
    expect(() => {
      const winningNumber = "5, 15, 25, 35, 45, 5";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      Validator.validateWinningNumber(parsedWinnningNumber);
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBER_DUPLIATE);
  });
  test("당첨 번호가 숫자가 아닌 경우", () => {
    expect(() => {
      const winningNumber = "1, 3, F, 6, D, 9";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      Validator.validateWinningNumber(parsedWinnningNumber);
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBER_NAN);
  });

  test("1~45 사이의 숫자가 아닌 경우", () => {
    expect(() => {
      const winningNumber = "10, 20, 30, 40, 50, 26";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      Validator.validateWinningNumber(parsedWinnningNumber);
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBER_OVER_LIMIT);
  });
  test("당첨 번호가 비어있는 경우", () => {
    expect(() => {
      const winningNumber = "";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      Validator.validateWinningNumber(parsedWinnningNumber);
    }).toThrow(ERROR_MESSAGES.WINNING_NUMBER_EMPTY);
  });
});

describe("validator 보너스 번호 검증 단위 테스트", () => {
  test("보너스 번호가 1개 이상인 경우", () => {
    expect(() => {
      const winningNumber = "1, 3, 5, 6, 7, 8, 9";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      const bonusNumber = "23, 34";
      Validator.validateBonusNumber(parsedWinnningNumber, bonusNumber);
    }).toThrow(ERROR_MESSAGES.BONUS_NUMBER_NOT_1_DIGIT);
  });
  test("보너스 번호가 중복인 경우", () => {
    expect(() => {
      const winningNumber = "5, 15, 25, 35, 45, 5";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      const bonusNumber = "45";
      Validator.validateBonusNumber(parsedWinnningNumber, bonusNumber);
    }).toThrow(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
  });
  test("보너스 번호가 숫자가 아닌 경우", () => {
    expect(() => {
      const winningNumber = "1, 3, F, 6, D, 8, 9";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      const bonusNumber = "d";
      Validator.validateBonusNumber(parsedWinnningNumber, bonusNumber);
    }).toThrow(ERROR_MESSAGES.BONUS_NUMBER_NAN);
  });

  test("1~45 사이의 숫자가 아닌 경우", () => {
    expect(() => {
      const winningNumber = "10, 20, 30, 40, 50, 26";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      const bonusNumber = "56";
      Validator.validateBonusNumber(parsedWinnningNumber, bonusNumber);
    }).toThrow(ERROR_MESSAGES.BONUS_NUMBER_OVER_LIMIT);
  });
  test("보너스 번호가 비어있는 경우", () => {
    expect(() => {
      const winningNumber = "10, 20, 30, 40, 50, 26";
      const parsedWinnningNumber = parseWinningNumber(winningNumber);
      const bonusNumber = "";
      Validator.validateBonusNumber(parsedWinnningNumber, bonusNumber);
    }).toThrow(ERROR_MESSAGES.BONUS_NUMBER_EMPTY);
  });
});
