import styles from "./App.module.css";
import * as component from "./components";

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import * as bootstrap from "bootstrap";

const ProtectedRoute = ({ children }) => {
  // const swalert = withReactContent(Swal);

  // const [user] = useAuthState(auth);
  const token = sessionStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <>
      <component.Header />
      <Routes>
        {/* <Route path="/" element={<component.Login />} /> */}
        <Route path="/login" element={<component.Login />} />
        <Route path="/" element={<component.Home />} />
      </Routes>
    </>
  );
}

export default App;
