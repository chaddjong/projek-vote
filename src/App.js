import React, { Component } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MobileFormMaking from "./pages/MobileFormMaking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormMaking from "./pages/DesktopFormMaking";
import MakingToken from "./pages/DesktopMakingToken";
import Testing from "./pages/flextest";
import Success from "./pages/ResponseSuccess";
import Warning from "./pages/ResponseWarning";
import Dashboard from "./pages/Dashboard";
import FormChecking from "./pages/FormChecking";
import Voting from "./pages/Voting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form-making" element={<MobileFormMaking />} />
        <Route path="/form-checking" element={<FormChecking />} />
        <Route path="/making-token" element={<MakingToken />} />
        <Route path="/dashboard-report" element={<Dashboard />} />
        <Route path="/response-confirmation" element={<Success />} />
        <Route path="/form-voting" element={<Voting />} />
      </Routes>
    </BrowserRouter>
    // <Voting />
  );
}

export default App;
