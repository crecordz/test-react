import "./App.css";
import Founders from "./components/Founders/Founders";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="page">
        <Main />
        <Founders />
      </div>
    </div>
  );
}

export default App;
