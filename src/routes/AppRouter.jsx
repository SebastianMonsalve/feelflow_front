import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import { AuthProvider } from "../Context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";

function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/app/*" element={<PrivateRoutes />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        draggable={true}
        progress={undefined}
        closeButton={false}
        newestOnTop={true}
        pauseOnHover={false}
        theme="dark"
      />
    </AuthProvider>
  );
}

export default AppRouter;
