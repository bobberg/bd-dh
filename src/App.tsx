import React, { useEffect } from "react";
import { pdfjs } from 'react-pdf';
import "./App.css";
import BelastingDienstLogo from "./assets/BelastingdienstLogo";
import PdfPage from "./components/PdfPage/PdfPage";

declare global {
  interface Window {
    uneeqInteractionsOptions: any;
  }
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  useEffect(() => {
    window.uneeqInteractionsOptions = {
      personaShareId: process.env.REACT_APP_PERSONA_SHARE_ID,
      layoutMode: "fullScreen",
      showUserInputInterface: true,
      displayCallToAction: true,
      enableMicrophone: true,
    };

    const script = document.createElement("script");
    script.src = "https://hosted.eu.uneeq.io/interactions/v1/deploy";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
    <div className="App">
      <nav className="App-nav">
        <BelastingDienstLogo />
      </nav>
     {/* <header className="App-header"></header> */}
    </div>
    <div>
      <PdfPage />
    </div>
    </div>
  );
}

export default App;
