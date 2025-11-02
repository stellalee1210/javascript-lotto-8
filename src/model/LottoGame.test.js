import { LottoGame } from "./LottoGame.js";
import { Lotto } from "../Lotto.js";
describe("LottoGame 클래스 기능 단위 테스트", () => {
  test("입력한 구입 금액만큼 로또 번호 자동 생성", () => {
    const moneyInput = 5000;
    const lottoNumbers = LottoGame.generateLottoNumbers(moneyInput);
    expect(lottoNumbers.length).toEqual(5);
  });

  test("당첨된 값 확인", () => {
    const randomNum = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const lottoTickets = randomNum.map((v) => new Lotto(v));
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const expectReturnValue = [1, 0, 0, 0, 0];
    const returnValue = LottoGame.calculateWinningNumber(
      lottoTickets,
      winningNumber,
      bonusNumber
    );
    expect(returnValue).toEqual(expectReturnValue);
  });
  test("수익률 계산", () => {
    const matchReuslt = [1, 0, 0, 0, 0];
    const purchaseAmount = 8;

    const payAmount = purchaseAmount * 1000;
    const profit = 5000;

    const profitRate = (profit / payAmount) * 100;
    const returnValue = LottoGame.calculateProfitRate(
      matchReuslt,
      purchaseAmount
    );
    expect(returnValue).toEqual(profitRate);
  });
});
