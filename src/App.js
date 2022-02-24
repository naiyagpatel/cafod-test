//import logo from "./logo.svg";
import logo from "./logo.PNG";
import Worldgiftbuy from "./components/Worldgiftbuy";
import SetupPage from "./components/SetupPage";
import WorldAtoZ from "./components/WorldAtoz";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <a href="">Fundraise for World Gift</a>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div>
          <p>
            World Gifts are ethical charity gifts that are perfect to fundraise
            for as a parish or with friends and family.
          </p>
        </div>
        <Worldgiftbuy />
        <SetupPage />
        <WorldAtoZ />
      </main>
    </div>
  );
}

export default App;
