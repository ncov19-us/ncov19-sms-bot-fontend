import React from "react";
// burger for menu
import burger from "../../assets/menu.png";

// import { Modal } from "semantic-ui-react";

import "../Styles.scss";

/*
menubar COMPONENT 
Styling is in pages.scss 
	unable href see body content 
	for menubar hover 
		.menubar position and top href get menubar href hover 
		
Needed inline styling for Modal 
*/

const aTags = { color: "white" };

export default function Header() {
  return (
    <div className="menubar">
      <div className="title">
        <a href="#" className="title-link">
          <h1 className="title-name">COVID-19 Tracker</h1>
        </a>
      </div>
      <nav className="menubar-links">
        <a className="menubar-link" href="#" alt="mobile-sms" id="sms-btn">
          Get Mobile Updates
        </a>
        <a className="menubar-link" href="#">Vaccine Tracker</a>
        <a className="menubar-link" href="#">About</a>
      </nav>

      {/* <div className="mobile">
        <Modal trigger={<img src={burger} alt="menu-trigger" />} basic>
          <Modal.Content>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontSize: "1.5rem"
              }}
            >
              <a href="#" alt="mobile-sms" style={aTags}>
                Get Mobile Updates
              </a>
              <a href="#" style={aTags} className="menubar-right">
                Vaccine Tracker
              </a>
              <a href="#" style={aTags} className="menubar-right">
                About
              </a>
            </div>
          </Modal.Content>
        </Modal>
      </div> */}
    </div>
  );
}
