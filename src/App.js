import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import MobileFormMaking from "./pages/MobileFormMaking";
import Testing from "./pages/flextest";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
