import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Joblist from "./pages/Joblist";
import MainPage from "./pages/MainPage";
import Specialist from "./pages/Specialist";
import Companies from "./pages/Companies";
import Salaries from "./pages/Salaries";

const Mainapp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/joblist" element={<Joblist />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/salaries" element={<Salaries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Mainapp;
