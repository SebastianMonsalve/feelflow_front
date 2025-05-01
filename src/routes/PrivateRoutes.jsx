import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "../Layouts/PrivateLayout.jsx";
import Home from "../Pages/PrivatePages/Home.jsx";

const PrivateRoutes = () => (
  <Routes>
    <Route element={<PrivateLayout />}>
      <Route path="/home" element={<Home />} />
    </Route>
  </Routes>
);

export default PrivateRoutes;
