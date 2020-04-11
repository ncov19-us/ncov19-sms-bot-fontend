import React, { useState } from "react";
// import submitSent from "./utility/submitSend";
import axios from "axios";

// styling
import "./App.scss";

// image imports
import Phone from "./assets/mobile_image.png";

// component imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"

const App = () => {

  // state to hold the input data before sending it to the backend
  const [state, setState] = useState({
    zip: "",
    phone: ""
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Success, you are now added to the messaging list")
    // axios
    //   .post(`${process.env.REACT_APP_API_URL}/sms/web`, state)
    //   .then(alert("Thank you for subscribing"))
    //   .catch(e => {
    //     console.log("AN ERROR WHILE POSTING TO DATABASE", e)
    //     alert("Sorry, an error happened on our end, please try again later")
    //   });
  };

  return (
    <div className="App">
      {/* <Navbar/> */}
      <Header />
      <main class="cta-section">
        <div className="cta-wrapper">
          <div className="img-wrapper">
            <img src={Phone} alt="phone demo of app" className="phone" />
          </div>
          <div className="form-wrapper">
            <div className="form-description">
              <h2 className="form-description-header">
                Get tailored COVID-19 UPDATES<br />delivered strait to mobile
                </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <label className="form-label">
                CELLPHONE<br />
                <input
                  id="phone"
                  type="phone"
                  name="phone"
                  className="form-input"
                  placeholder="555-555-5555"
                  onChange={handleChange}
                  pattern="^\d{10}$"
                  title="Must be 10 digits"
                  required
                />
              </label>
              <label className="form-label">
                ZIP CODE
                  <input
                  id="zip"
                  type="number"
                  name="zip"
                  className="form-input"
                  placeholder="90210"
                  onChange={handleChange}
                  pattern="^\d{5}$"
                  title="Must be 5 digits"
                  required
                />
              </label>
              <div className="btn-wrapper">
                <button className="submit-btn">Get Notified</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
