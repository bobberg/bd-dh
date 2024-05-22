import React, { useEffect } from "react";
import "./App.css";
import BelastingDienstLogo from "./assets/BelastingdienstLogo";

declare global {
  interface Window {
    uneeqInteractionsOptions: any;
  }
}

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
    <div className="App">
      <nav className="App-nav">
        <BelastingDienstLogo />
      </nav>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
