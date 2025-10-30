import { parseWinningNumber } from "./parser.js";

describe("parser 기능 단위 테스트", () => {
  test("정상 당첨 번호", () => {
    const input = "3, 7, 9, 12, 45, 23";
    const parsedArray = parseWinningNumber(input);

    expect(parsedArray).toEqual([3, 7, 9, 12, 45, 23]);
  });
});
