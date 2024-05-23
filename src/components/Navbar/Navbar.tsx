import React from "react";
import "./Navbar.css";
import HamburgerMenuIcon from "../../assets/HamburgerMenuIcon";
import HouseIcon from "../../assets/HouseIcon";
import PersonIcon from "../../assets/PersonIcon";
import ChevronRightIcon from "../../assets/ChevronRightIcon";
import ChevronDownIcon from "../../assets/ChevronDownIcon";

const Navbar = () => {
  return (
    <>
      <nav className="app-nav">
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
          <div>J.A.A. DIKMANS</div>
          <div>
            <ChevronDownIcon />
          </div>
        </div>
      </nav>
      <div className="nav-breadcrumbs">
        <div>
          <HouseIcon />
        </div>
        <div>Overzicht</div>

        <div>
          <ChevronRightIcon />
        </div>

        <div>Mijn FSV - uw persoonlijk overzicht</div>
      </div>
    </>
  );
};

export default Navbar;
