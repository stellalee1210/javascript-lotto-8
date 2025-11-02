import { Console } from "@woowacourse/mission-utils";
import { RESULT_MESSAGE } from "../constants/messages.js";

export const printLottoTickets = (lottoTickets) => {
  Console.print(`\n${lottoTickets.length}개를 구매했습니다.`);
  lottoTickets.forEach((ticket) => {
    Console.print(ticket.lottoNumbers);
  });
  Console.print(""); // 줄바꿈 처리
};

export const printResult = (result) => {
  Console.print(`\n당첨 통계`);
  Console.print(`---`);
  result.forEach((v, i) => {
    Console.print(`${RESULT_MESSAGE[i]} - ${result[v]}개`);
  });
};
