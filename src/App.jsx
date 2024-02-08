import React from "react";
import Header from "../src/components/Header.jsx";
import Feature from "../src/components/Feature.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />,
      </Routes>
    </div>
  );
}

export default App;
