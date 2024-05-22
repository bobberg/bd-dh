import React from "react";
import { pdfjs } from 'react-pdf';
import "./App.css";
import BelastingDienstLogo from "./assets/BelastingdienstLogo"; // Ensure the import path and naming is correct
import PdfPage from "./components/PdfPage/PdfPage";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  return (
    <div>
    <div className="App">
      <nav className="App-nav">
        <BelastingDienstLogo />
      </nav>
     {/* <header className="App-header"> </header> */}
        <div id="digitalhuman"></div>
    </div>
    <div className="Pdf-div"> <PdfPage /> </div>
    </div>
  );
}

export default App;
