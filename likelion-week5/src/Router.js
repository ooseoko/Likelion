import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Success from "./pages/Success";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/likelion" element={<Success />} />

        {/* 힌트: 라우팅 경로 이름을 잘 확인하세요. */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
