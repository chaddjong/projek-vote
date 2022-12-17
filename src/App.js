import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MobileFormMaking from "./pages/MobileFormMaking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormMaking from "./pages/DesktopFormMaking";
import MakingToken from "./pages/DesktopMakingToken";
import Testing from "./pages/flextest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form-making" element={<MobileFormMaking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
