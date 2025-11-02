import { Console } from "@woowacourse/mission-utils";

export const printLottoTickets = (lottoTickets) => {
  Console.print(`\n${lottoTickets.length}개를 구매했습니다.`);
  lottoTickets.forEach((ticket) => {
    Console.print(ticket.lottoNumbers);
  });
  Console.print("");
};
