import React from "react";
import "./App.css";

import Navbar from "./components/Header/Header";
import PdfPage from "./components/PdfPage/PdfPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <PdfPage />
      <div id="digitalhuman"></div>
    </div>
  );
}

export default App;
