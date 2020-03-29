import React from 'react';
import './App.sass';

function App() {
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
        <form>
          <label>ZIP code</label><br/>
          <input
            label="Zipcode"
            placeholder="Please enter zipcode"
            name="zip"
            /><br/>
          <label>Phone Number</label><br/>
          <input
            label="Phone Number"
            placeholder="please enter phone number"
            name="phone"
            /><br />
          <button type="submit" className="submitButton">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default App;
