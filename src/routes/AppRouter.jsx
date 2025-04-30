import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../Pages/Welcome.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import RegisterPage from "../Pages/RegisterPage.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recovery" element={<h1>Recovery</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
