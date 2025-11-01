import { Console } from "@woowacourse/mission-utils";
import {
  PURCHASE_AMOUT_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  BONUS_NUMBER_MESSAGE,
} from "../constants/messages";
export const readPurchaseAmount = await Console.readLineAsync(
  PURCHASE_AMOUT_MESSAGE
); //공백 입력해도 에러 안 남

export const readWinningNumber = await Console.readLineAsync(
  WINNING_NUMBER_MESSAGE
);

export const readBonusNumber = await Console.readLineAsync(
  BONUS_NUMBER_MESSAGE
);
