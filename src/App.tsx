import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PdfPage from "./components/PdfPage/PdfPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="app-container">
        <div className="app-heading">Mijn FSV - Persoonlijk Overzicht</div>
        <PdfPage />
        <div id="digitalhuman"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
