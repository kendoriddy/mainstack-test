import React from "react";
import { Routes, Route } from "react-router-dom";
import Revenue from "./pages/Revenue";

function App() {
  return (
    <Routes>
      <Route path="/revenue" element={<Revenue />} />
    </Routes>
  );
}

export default App;
