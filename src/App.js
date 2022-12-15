import React from "react";
import DesktopFormMaking from "./pages/DesktopFormMaking";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import MobileFormMaking from "./pages/MobileFormMaking";
import Testing from "./pages/flextest";
import { BrowserRouter, Route } from "react-router-dom";
import { Router } from "express";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form-making" element={<MobileFormMaking />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
