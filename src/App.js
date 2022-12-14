import React from "react";
import MakingToken from "./pages/DesktopMakingToken";
import Sharepage from "./components/Sharepage";
import DesktopMenu from "./pages/DesktopMenu";
import DesktopFormMaking from "./pages/DesktopFormMaking";
import HomeMenu from "./components/HomeMenu";
import HomePage from "./pages/HomePage";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import MobileFormMaking from "./pages/MobileFormMaking";
import Testing from "./pages/flextest";

function App() {
  return (
    <div className="App">
      <MakingToken />
      {/* <DesktopMenu /> */}
      {/* <DesktopFormMaking /> */}
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <Testing /> */}
    </div>
  );
}

export default App;
