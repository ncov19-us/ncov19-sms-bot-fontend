import React, { useState } from "react";
// import submitSent from "./utility/submitSend";
import axios from "axios";
import Loader from "react-loader-spinner"

// styling
import "./App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// image imports
import Phone from "./assets/phone.svg";

// component imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  // state to hold the input data before sending it to the backend
  const [state, setState] = useState({
    zip: "",
    phone: ""
  });

  // using a hook to handle Loading state
  const [status, setStatus] = useState({
    isLoading: false,
    success: false,
    failure: false
  });

  const handleChange = event => {
    setState({ 
      ...state, 
      [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // switching status to tStatus so the loader animation shows up
    setStatus({
      ...status,
      isLoading: true
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/sms/web`, state)
      .then(res => { 
        console.log('success')
        setStatus({
          ...status,
          success: true,
          isLoading: false
        });
      })
      .catch(err => { 
        console.log(err)
        setStatus({
          ...status,
          success: false,
          isLoading: false
        });
      });
  };

  console.log(state)
  return (
    <div className="App">
      <Header />
      <div className="App-wrapper">
        <div className="form-wrapper">
          <div className="img-wrapper">
            <img src={Phone} alt="phone demo of app" className="phone" />
          </div>
          <form onSubmit={handleSubmit}>
            <p className="description">
              Get tailored COVID-19 SMS updates for your area.
              <br />
              <br />
              No sign-up required.
            </p>
            <label htmlFor="phone"></label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="form-input"
              placeholder="ex. 555-555-5555"
              name="phone"
              id="phone"
              onChange={handleChange}
              value={state.phone}
              required
            />
            <label htmlFor="zip">Zip Code</label>
            <input
              type="number"
              min="10"
              className="form-input"
              placeholder="ex. 90210"
              name="zip"
              id="zip"
              onChange={handleChange}
              value={state.zip}
              required
            />
            <div className="btn-wrapper">
              {status.isLoading ? (<button className="submit-btn">
                  <Loader
                    type="Oval"
                    color="#FFFFFF"
                    height={25}
                    width={25}
                    timeout={30000} //10 secs
                    style={{ marginTop: ".2rem" }}
                  />
                </button>
              ) : (
                <button
                  className="submit-btn"
                >
                  Update Me
                </button>
              )}
              {status.success ? (
                <h2 className="messages messages-success">
                  Success!  You should be getting a message from us any second.
                </h2>
              ) : null}
              {status.failure ? (
                <h2 className="messages">
                  Something went wrong.  Make sure you are using a 5 digit zip code.
                </h2>
              ) : null}
              {/* <button className="submit-btn">Update Me</button> */}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
