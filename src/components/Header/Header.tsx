import React from "react";
import "./Header.css";
import BelastingDienstLogo from "../../assets/BelastingdienstLogo";

const Header = () => {
  return (
    <>
      <div className="App-header">
        <BelastingDienstLogo />
      </div>
      <nav className="App-nav"></nav>
    </>
  );
};

export default Header;
