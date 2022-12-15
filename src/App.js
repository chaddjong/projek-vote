import React from "react";
import DesktopFormMaking from "./pages/DesktopFormMaking";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import MobileFormMaking from "./pages/MobileFormMaking";
import Testing from "./pages/flextest";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <MobileFormMaking />
      {/* <LoginPage /> */}
      {/* <Testing /> */}
    </div>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form-making" element={<MobileFormMaking />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 4d717d673fe37fd0c52efd457ecd3f4fd18deed2
  );
}

export default App;
