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
    console.log('req url', process.env.REACT_APP_API_URL)
    axios
      .post(`${process.env.REACT_APP_API_URL}/sms/web`, state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  console.log(state)
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Header />
      <main className="cta-section">
        <div className="cta-wrapper">
          <div className="img-wrapper">
            <img src={Phone} alt="phone demo of app" className="phone" />
          </div>
          <div className="form-wrapper">
            <div className="form-container">
              <div className="form-description">
              <h2 className="form-description-header">
                Get tailored COVID-19 updates delivered<br/>straight to mobile
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <label className="form-label">
                  Phone Number<br/>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="ex. 555-555-5555"
                    onChange={handleChange}
                    pattern="^\d{10}$"
                    title="Must be 10 digits"
                    required
                  />
                </label>
                <label className="form-label">
                  ZIP Code
                  <input
                    id="zip"
                    type="string"
                    name="zip"
                    className="form-input"
                    placeholder="ex. 90210"
                    onChange={handleChange}
                    pattern="[0-9]{5}$"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
