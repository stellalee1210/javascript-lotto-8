import { LottoSimulator } from "./LottoSimulator.js";
class App {
  async run() {
    const simulator = new LottoSimulator();
    await simulator.startLotto();
  }
}

export default App;
