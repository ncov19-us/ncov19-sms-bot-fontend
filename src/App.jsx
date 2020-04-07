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

    axios
      .post(`${process.env.REACT_APP_API_URL}/sms/web`, state)
      .then(alert("Thank you for subscribing"))
      .catch(e => console.log("AN ERROR WHILE POSTING TO DATABASE", e));
  };

  return (
    <div className="App">
      <Header />
      {/* <div>
        <div className="App-wrapper">
          <div className="img-wrapper">
            <img src={Phone} alt="phone demo of app" className="phone" />
          </div>
          <div className="form-wrapper">
            <p className="description">
              Get Tailored COVID-19 updates delivered to your mobile
              <br />
              <span className="description-secondary-text">No sign-up required, just text your zipcode to the same number</span>
            </p>
            <form>
              <input
                type="phone"
                className="form-input"
                placeholder="ex. 555-555-5555"
              />
              <input
                type="number"
                className="form-input"
                placeholder="ex. 90210"
              />
              <div className="btn-wrapper">
                <button className="submit-btn"> Update Me</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
