import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import axios from "axios";
import Captcha from '../Captcha/Captcha';
// network req utility
import MockRequest from '../../utility/PromiseRequest'


function Form() {

  // state to hold the input data before sending it to the backend
  const [state, setState] = useState({
    zip: "",
    phone: "",
    captcha: ""
  });

  // track network request
  const [status, setStatus] = useState({
    isLoading: false,
    success: false,
    failure: false,
    captcha: false
  });

  // form tracking
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  useEffect(() => {

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js`
    script.setAttribute("async", "")
    script.setAttribute("defer", "")
    document.body.appendChild(script)
    window.onSubmit = async () => {
      const token = await window.grecaptcha.getResponse()
      setState({ ...state, captcha: token })
    }
  })

  // form submission
  const handleSubmit = async e => {
    e.preventDefault();

    setStatus({ ...status, isLoading: true });

    axios
      .post(`${process.env.REACT_APP_API_URL}/sms`, state)
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

  return (
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
              <p className="instructions">Just reply to our text with another ZIP code to get updates for that area.</p>
            </div>
          </form>
        </div>
      )}

      {/* Form  */}
      {!status.isLoading && !status.success && !status.failure && (
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <h2 className="form-description-header">
              Get a COVID-19 SMS update for any U.S. ZIP code.
            </h2>
            <h4 className="form-description-subheading">
              No subscription required.
            </h4>

            <label className="form-label form-label-phone">
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
                title="Please enter a valid 10 digit US phone number ex. 555-555-5555"
                required
              />
            </label>
            <label className="form-label form-label-zip">
              ZIP Code
                <br />
              <input
                id="zip"
                type="number"
                name="zip"
                className="form-input"
                placeholder="ex. 90210"
                onChange={handleChange}
                value={state.zip}
                pattern="[0-9]{5}$"
                title="Please enter a valid 5 digit US zipcode"
                required
              />
            </label>
            <div className="btn-wrapper">
              {
                state.captcha !== "" &&
                <button id="captcha-submit" className="submit-btn">Send Update</button>
              }
              {state.captcha === "" && <Captcha />}
            </div>
            <div className="status-messages"></div>


          </form>
        </div>
      )}
    </React.Fragment>
  )
}

export default Form