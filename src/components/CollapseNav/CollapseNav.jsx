import React from 'react'

function CollapseNav({ toggle }){
  
  return(
    
    <div className="collapse-nav-container" style={{"display": toggle ? "flex": "none"}}>
      <nav className="collapse-nav">
        <a className="collapse-nav-link" href="https://sms.ncov19.us" alt="mobile-sms" id="sms-btn">
          Get Mobile Updates
        </a>
        <a className="collapse-nav-link" href="https://ncov19.us/about">About</a>
        {/* <a className="collapse-nav-link" href="https://vaccine.ncov19.us/">Vaccine Tracker</a> */}
      </nav>
    </div>
  )
}

export default CollapseNav