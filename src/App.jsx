import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CardPage from "./components/UI/card/cardPage";
import { ROUTER_PATH } from "./helpers/path";
import MainLayout from "./layouts/main";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route
          path={ROUTER_PATH.base}
          element={<Navigate replace to={ROUTER_PATH.card} />}
        />
        <Route path={ROUTER_PATH.card} element={<CardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
