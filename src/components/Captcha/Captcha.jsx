import React from 'react'

function Captcha(){

  return(
    <div 
      className="g-recaptcha"
      data-sitekey={process.env.REACT_APP_CAPTCHA_KEY}
      data-callback="onSubmit"
      data-theme="dark"
    ></div>
  )
}

export default Captcha