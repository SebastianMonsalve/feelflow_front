import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "../Layouts/PrivateLayout.jsx";
import Home from "../Pages/PrivatePages/Home.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const PrivateRoutes = () => (
  <Routes>
    <Route element={<ProtectedRoute />}>
      <Route element={<PrivateLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Route>
  </Routes>
);

export default PrivateRoutes;
