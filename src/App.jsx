import React from "react";
import Header from "../src/components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/Movie.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
