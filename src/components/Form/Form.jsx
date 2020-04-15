import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import axios from "axios";

function Form(){

  // state to hold the input data before sending it to the backend
  const [state, setState] = useState({
    zip: "",
    phone: "",
  });

  // track network request
  const [status, setStatus] = useState({
    isLoading: false,
    success: false,
    failure: false,
  });

  // form tracking
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // form submission
  const handleSubmit = e => {
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
        failure: false,
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

  return(
      <React.Fragment>
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
      </React.Fragment>
  )
}

export default Form