import { Console } from "@woowacourse/mission-utils";
export const printLottoNumbers = (lottoNumbers) => {
  Console.print(`\n${lottoNumbers.length}개를 구매했습니다.`);
  lottoNumbers.map((v) => Console.print(v));
};
