import { LottoSimulator } from "./LottoSimulator.js";
class App {
  async run() {
    await new LottoSimulator();
  }
}

export default App;
