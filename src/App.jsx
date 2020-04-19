import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Loader from 'react-loader-spinner'

// styling
import "./App.scss";

// image imports
import Phone from "./assets/mobile_image.png";

// component imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CollapseNav from './components/CollapseNav/CollapseNav'
import Form from './components/Form/Form'
import Captcha from "./components/Captcha/Captcha";

const App = () => {

  // track open or closed state
  const [toggle, setToggle] = useState(false)

  // Close menu if open and screen resizes to be more than 64rem
  useEffect(() => {
    
    function handleResize(){

      const windowSize = window.innerWidth;

      if(windowSize > 1152 && toggle) {
        setToggle(!toggle)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  // toggle drop down
  function handleToggle() {
    // const collapseNav = document.querySelector(".collapse-nav-container");
    // collapseNav.addEventListener('click', (e) => {
    //   e.preventDefault()
    //   collapseNav.classList.remove("fadeInDown")
    //   collapseNav.offsetWdith = collapseNav.offsetWdith
    //   collapseNav.classList.add("fadeInDown")
    // })
    setToggle(!toggle)
  }

  
  return (
    <div className="App">
      <Header handleToggle={handleToggle}/>
      
      {/* Collapse Menu */}
      <div className="collapse-container">
        <CollapseNav toggle={toggle}/>
      </div>

      {/* Main Page Content */}
      <div className="main-container">
        <div className="img-wrapper">
          <img src={Phone} alt="phone demo of app" className="phone" />
        </div>
        <Form/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
