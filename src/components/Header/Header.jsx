import React from 'react';
// burger for menu
import Toggle from '../Toggle/Toggle'

// import { Modal } from "semantic-ui-react";

import '../Styles.scss';

/*
menubar COMPONENT 
Styling is in pages.scss 
	unable href see body content 
	for menubar hover 
		.menubar position and top href get menubar href hover 
		
Needed inline styling for Modal 
*/

const aTags = { color: 'white' };
const navHeight = {height: "30vh"}

export default function Header({ handleToggle }) {
  return (

      <div className="menubar" >
        <div className="title">
          <a href="https://ncov19.us" className="title-link">
            <h1 className="title-name">COVID-19 <span className="title-span">Tracker</span></h1>
          </a>
        </div>
        <nav className="menubar-links">
          <a className="menubar-link" href="https://sms.ncov19.us" alt="mobile-sms" id="sms-btn">
            Get Mobile Updates
          </a>
          <a className="menubar-link" href="https://ncov19.us/about">About</a>
          {/* <a className="menubar-link" href="https://vaccine.ncov19.us/">Vaccine Tracker</a> */}
        </nav>
                  
        {/* Hambuger Menu */}
        <div className="toggler" onClick={handleToggle}>
          <div className="toggler-icon"></div>
        </div>
      </div>
  );
}
