import React from 'react'

function CollapseNav({ toggle }) {

  return (

    <div className={`collapse-nav-container ${toggle ? "fadeInDown": ""}`} style={{ "display": toggle ? "flex" : "none" }}>
      <nav className="collapse-nav" style={{ "display": toggle ? "none" : "hidden" }}>
        <a className="collapse-nav-link" href="https://covid19-us-staging.herokuapp.com/" alt="mobile-home">
          Home
          </a>
        <a className="collapse-nav-link" href="/" alt="mobile-sms" id="sms-btn">
          Get Mobile Updates
        </a>
        <a className="collapse-nav-link" href="https://covid19-us-staging.herokuapp.com/about">About</a>
        {/* <a className="collapse-nav-link" href="https://vaccine.ncov19.us/">Vaccine Tracker</a> */}
      </nav>
    </div>
  )
}

export default CollapseNav