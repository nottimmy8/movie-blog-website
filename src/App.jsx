import React from "react";
import Header from "../src/components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/Movie.jsx";
import Feature from "./components/Feature.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Movie/:id" element={<Movie />} />
        <Route path="/Header/:id" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
