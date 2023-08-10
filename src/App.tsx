import "./App.css";
import Founders from "./components/Founders/Founders";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="page">
                <Main />
                <Founders />
              </div>
            </>
          }
        />
        <Route path="/mobilemenu" element={<MobileMenu />} />
      </Routes>
    </div>
  );
}

export default App;
