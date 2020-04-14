import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'

// styling
import "./App.scss";

// image imports
import Phone from "./assets/mobile_image.png";

// component imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  // state to hold the input data before sending it to the backend
  const [state, setState] = useState({
    zip: "",
    phone: "",
  });

  const [status, setStatus] = useState({
    isLoading: false,
    success: false,
    failure: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({ ...status, isLoading: true });
    
    axios
    .post(`${process.env.REACT_APP_API_URL}/sms/web`, state)
    .then((res) => {
      // setState({ zip: "", phone: "" });
      setStatus({ 
        ...status,
        isLoading: false,
        success: true,
        failure: false
      });
    })
    .catch((err) => {
      setStatus({
        ...status,
        isLoading: false,
        success: false,
        failure: true
      });
    });
  };
  
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="img-wrapper">
          <img src={Phone} alt="phone demo of app" className="phone" />
        </div>
        {/* Load Spinner */}
        {status.isLoading && (
          <div className="form-container">
            <form className="form">
              <Loader
                type="Oval"
                color="#F4B000"
                height={100}
                width={100}
                // timeout={3000}
              />
            </form>
          </div>
        )}
      
        {/* Form Submission Error */}
        {status.failure && (
          <div className="form-container">
          <form className="form">
            <div className="status-container">
              <h3 className="status">Oops.</h3>
              <p className="message">Something went wrong on our end.  Please try again later.</p>
            </div>
          </form>
        </div>
        )}
      
        {/* Successful Form Submission Message */}
        {status.success && (
          <div className="form-container">
          <form className="form">
            <div className="status-container">
              <h3 className="status">Success!</h3>
              <p className="message">You should be receiving a message from us any second.</p>
              <p className="instructions">Just reply to our text with another zip code to get updates for that area.</p>
            </div>
          </form>
        </div>
        )}
        {/* Form  */}
        {!status.isLoading && !status.success && !status.failure && (
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
              <h2 className="form-description-header">
                Get tailored COVID-19 updates delivered straight to your phone.
              </h2>
              <label className="form-label">
                Phone Number
                <br />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="ex. 555-555-5555"
                  onChange={handleChange}
                  value={state.phone}
                  pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$"
                  title="Please use a valid 10 digit US phone number ex. 555-555-5555"
                  required
                  />
              </label>
              <label className="form-label">
                ZIP Code
                <br />
                <input
                  id="zip"
                  type="string"
                  name="zip"
                  className="form-input"
                  placeholder="ex. 90210"
                  onChange={handleChange}
                  value={state.zip}
                  pattern="[0-9]{5}$"
                  title="Please enter a vlid 5 digit US zipcode"
                  required
                  />
              </label>
              <div className="btn-wrapper">
                <button className="submit-btn">Send Update</button>
              </div>
              <div className="status-messages"></div>
            </form>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default App;
