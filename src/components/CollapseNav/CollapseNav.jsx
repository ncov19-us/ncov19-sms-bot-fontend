import React from 'react'

function CollapseNav({ toggle }) {

  return (

    <div id="navbar" className={`collapse-nav-container ${toggle ? "slideIn" : "slideOut"}`}>
      <nav className="collapse-nav">
        <a className="collapse-nav-link" href={process.env.REACT_APP_DASH_URL} alt="mobile-home">
          Home
          </a>
        <a className="collapse-nav-link" href="/" alt="mobile-sms" id="sms-btn">
          Get Mobile Updates
        </a>
        <a className="collapse-nav-link" href={`${process.env.REACT_APP_DASH_URL}/about`}>About</a>
        {/* <a className="collapse-nav-link" href="https://vaccine.ncov19.us/">Vaccine Tracker</a> */}
      </nav>
    </div>
  )
}

export default CollapseNav