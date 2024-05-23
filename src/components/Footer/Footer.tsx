import React from "react";
import "./Footer.css";
import ChevronRightIcon from "../../assets/ChevronRightIcon";
import ArrowUpIcon from "../../assets/ArrowUpIcon";
import ClickIcon from "../../assets/ClickIcon";
import PhoneIcon from "../../assets/PhoneIcon";
import ChatBubbleIcon from "../../assets/ChatBubbleIcon";
import MobileIcon from "../../assets/MobileIcon";

const Footer = () => {
  return (
    <>
      <div className="Footer-component">
        <div className="Footer-info">
          <div className="Footer-left">
            <h2>FSV Portaal</h2>
            <div className="List-links">
              <ul>
                <li>
                  <ChevronRightIcon /> Ik en de FSV
                </li>
                <li>
                  <ChevronRightIcon /> Over de FSV
                </li>
                <li>
                  <ChevronRightIcon />
                  Nieuws
                </li>
                <li>
                  <ChevronRightIcon /> Het programma
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer-right">
            <div>
              <h2>Heeft u vragen of opmerkingen?</h2>
              <p>
                Wij helpen u graag verder. U heeft de volgende mogelijkheden:
              </p>
            </div>

            <div className="Contact-component">
              <div className="Contact-info">
                <div>
                  <PhoneIcon />
                </div>
                <div className="Contact-info-list">
                  <h3>Plan een afspraak in</h3>
                  <a>
                    Log in op het persoonlijk overzicht om{" "}
                    <u>
                      een afspraak in te <br /> plannen
                    </u>
                  </a>
                </div>
              </div>
              <div className="Contact-info">
                <div>
                  <ChatBubbleIcon />
                </div>
                <div className="Contact-info-list">
                  <h3>Chat met een medewerker</h3>
                  <p>
                    <u>Open de chat</u> om een gesprek te starten. <br />
                    Bereikbaar van 10.00 tot 16.00 uur.
                  </p>
                </div>
              </div>
              <div className="Contact-info">
                <div>
                  <MobileIcon />
                </div>
                <div className="Contact-info-list">
                  <h3>Bel met het FSV Informatiepunt</h3>
                  <p>
                    Op <u>0800 235 83 56</u> (gratis). We zijn bereikbaar van
                    maandag <br />
                    tot en met vrijdag tussen 8.00 en 17.00 uur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Copyright">
          <div className="Copyright-icon">
            <div>Privacy</div>
            <div>
              <ClickIcon />
            </div>
          </div>
          <div className="Copyright-icon">
            <div>Cookies</div>
            <div>
              <ClickIcon />
            </div>
          </div>
          <div className="Copyright-icon">
            <div>Copyright</div>
            <div>
              <ClickIcon />
            </div>
          </div>
          <div className="Copyright-icon">
            <div>Toegankelijkheid</div>
            <div>
              <ClickIcon />
            </div>
          </div>
        </div>
        <div className="Copyright">
          <div className="Copyright-icon">
            <div>Terug naar boven</div>
            <div>
              <ArrowUpIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
