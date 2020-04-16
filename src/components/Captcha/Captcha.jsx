import React, { useEffect } from 'react'

function Captcha(){



  // Adjust reCaptcha both on render and also on resize of screen
  useEffect(() => {
    
    function handleResize(){

      const windowSize = window.innerWidth;
      const captcha = document.querySelector(".g-recaptcha")

      if(windowSize > 539) {
        captcha.style.transform = "scale(1.0)"
      }else if(400 < windowSize && windowSize < 539) {
        captcha.style.transform = "scale(0.77)"
        captcha.style.transformOrigin = "0 0"
      } else if (windowSize <= 399){
        captcha.style.transform = "scale(0.68)"
        captcha.style.transformOrigin = "0 0"
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener("readystatechange", () => {
      if(document.readyState === "complete"){
        handleResize()
      }
    })
    

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener("readystatechange")
    }
  })


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