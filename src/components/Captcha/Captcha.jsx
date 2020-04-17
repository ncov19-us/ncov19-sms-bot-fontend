import React, { useEffect } from 'react'

function Captcha(){



  // Adjust reCaptcha both on render and also on resize of screen
  useEffect(() => {
    
    function handleResize(){

      const windowSize = window.innerWidth;
      const captcha = document.querySelector(".g-recaptcha")
      captcha.style.transform = "scale(0.8)"
      captcha.style.transformOrigin = "0 0"

      if (400 < windowSize && windowSize <= 500){
        captcha.style.transform = "scale(0.7)"
      } else if (windowSize <= 400){
        captcha.style.transform = "scale(0.53)"
      }
    }

    function windowComplete(){
      if(document.readyState === "complete"){
        handleResize()
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener("readystatechange", windowComplete)
    

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener("readystatechange", windowComplete)
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