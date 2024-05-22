import React from "react";
import "./Navbar.css";
import HamburgerMenuIcon from "../../assets/HamburgerMenuIcon";
import HouseIcon from "../../assets/HouseIcon";
import PersonIcon from "../../assets/PersonIcon";
import ArrowRightIcon from "../../assets/ArrowRightIcon";
import ArrowDownIcon from "../../assets/ArrowDownIcon";

const Navbar = () => {
  return (
    <>
      <nav className="App-nav">
        <div className="nav-items">
          <div>
            <HamburgerMenuIcon />
          </div>
          <div>Menu</div>
          <div>FSV Portaal</div>
        </div>
        <div className="nav-user">
          <div>
            <PersonIcon />
          </div>
          <div>R J FIKKEMA</div>
          <div>
            <ArrowDownIcon />
          </div>
        </div>
      </nav>
      <div className="nav-breadcrumbs">
        <div>
          <HouseIcon />
        </div>
        <div>Overzicht</div>

        <div>
          <ArrowRightIcon />
        </div>

        <div>Mijn FSV - uw persoonlijk overzicht</div>
      </div>
    </>
  );
};

export default Navbar;
