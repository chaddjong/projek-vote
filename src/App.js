import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MobileFormMaking from "./pages/MobileFormMaking";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";  

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
