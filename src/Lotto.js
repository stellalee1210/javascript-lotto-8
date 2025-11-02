import { Validator } from "./utils/Validator.js";
export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateWinningNumber(numbers);
  }

  // TODO: 추가 기능 구현
  get lottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
