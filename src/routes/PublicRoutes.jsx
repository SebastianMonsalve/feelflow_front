import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../Layouts/PublicLayout.jsx";
import Welcome from "../Pages/PublicPages/Welcome.jsx";
import LoginPage from "../Pages/PublicPages/LoginPage.jsx";
import RegisterPage from "../pages/PublicPages/RegisterPage.jsx";

const PublicRoutes = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/recovery" element={<h1>Recovery</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
    </Route>
  </Routes>
);

export default PublicRoutes;
