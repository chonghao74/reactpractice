import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import OnePage from "./routes/OnePage";
import ErrorPage from "./routes/ErrorPage";

function AppRoutes() {
  let [myData, setData] = useState("Home");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="OnePage" element={<OnePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
