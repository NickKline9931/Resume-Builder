import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeBuilder from "./ResumeBuilder";

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResumeBuilder />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;