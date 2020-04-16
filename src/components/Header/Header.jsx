import React from 'react';
// Styles
import './Header.scss';

/*
menubar COMPONENT 
Styling is in pages.scss 
	unable href see body content 
	for menubar hover 
		.menubar position and top href get menubar href hover 
		
Needed inline styling for Modal 
*/


export default function Header({ handleToggle }) {
  return (

    <div className="menubar" >
      <div className="title">
        <a href="https://covid19-us-staging.herokuapp.com/" alt="home page" className="title-link">
          <h1 className="title-name">COVID-19 <span className="title-span">Tracker</span></h1>
        </a>
      </div>
      <nav className="menubar-links">
        <a className="menubar-link" href="/" alt="sms page" id="sms-btn">
          Get Mobile Updates
          </a>
        <a className="menubar-link" alt="about page" href="https://covid19-us-staging.herokuapp.com/about">About</a>
        {/* <a className="menubar-link" href="https://vaccine.ncov19.us/">Vaccine Tracker</a> */}
      </nav>

      {/* Hambuger Menu */}
      <div className="toggler" onClick={handleToggle}>
        <div className="toggler-icon"></div>
      </div>
    </div>
  );
}
