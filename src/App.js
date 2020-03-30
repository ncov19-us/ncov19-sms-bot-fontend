import React, { useState } from 'react';
import submitSent from './utility/submitSend';

import './App.sass';

function App() {
  // state to hold the input data before sending it to the backend
  const [State, setState] = useState({
    zip: "",
    phone: ""
  });
  
  const handleChange = event => {
    setState({ ...State, [event.target.name]: event.target.value });
};

  return (
    <div className="App" title="app">
      <header className="App-header">
        NCOVID 19 SMS
      </header>
      <div className="mission">
        <h1>Get the latest COVID-19 Updates</h1>
        <p>Subscribe to our SMS service that will text you updates of _____</p>
        <h2>Why Text Message Updates?</h2>
        <p>Instead of having to constantly to stress on searching for information about the Covid-19 Pandemic we will text you updates based on data coming straight from _____ </p>
      </div>
      <div className="inputs" >
        <form onSubmit={event =>  {event.preventDefault(); submitSent(State.zip, State.phone)}}>
          <label htmlFor="zip">Zipcode</label><br/>
          <input
            placeholder="please enter zipcode"
            name="zip"
            onChange={handleChange}
            type="text"
            pattern="(^\d{5}$)|(^\d{5}-\d{4}$)"
            required/><br/>
          <label htmlFor="phone">Phone Number</label><br/>
          <input
            placeholder="please enter phone number"
            name="phone"
            onChange={handleChange}
            type="text"
            pattern="(^\d{10}$)|(^\d{11}$)"
            required/><br />
          <h6 style={{color: "white"}}>US phone numbers only</h6>
          <button type="submit" className="submitButton" data-testid="subscribe" >Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default App;
