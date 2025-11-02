import { Console } from "@woowacourse/mission-utils";
import { RESULT_MESSAGE } from "../constants/messages.js";

export const printLottoTickets = (lottoTickets) => {
  Console.print(`\n${lottoTickets.length}개를 구매했습니다.`);
  lottoTickets.forEach((ticket) => {
    const foramttedTicket = ticket.lottoNumbers.join(", ");
    Console.print(`[${foramttedTicket}]`);
  });
  Console.print(""); // 줄바꿈 처리
};

export const printResult = (result) => {
  Console.print(`\n당첨 통계`);
  Console.print(`---`);
  result.forEach((v, i) => {
    Console.print(`${RESULT_MESSAGE[i]} - ${v}개`);
  });
};

export const printProfitRate = (profitRate) => {
  Console.print(`총 수익률은 ${profitRate}%입니다.`);
};

export const printError = (errorMessage) => {
  Console.print(`\n${errorMessage}`);
};
