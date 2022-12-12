import React from "react";
import DesktopMenu from "./pages/DesktopMenu";
import DesktopFormMaking from "./pages/DesktopFormMaking";
import HomeMenu from "./components/HomeMenu";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <DesktopFormMaking />
      {/* <DesktopMenu /> */}
      {/* <DesktopFormMaking /> */}
      {/*<HomePage />*/}
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
