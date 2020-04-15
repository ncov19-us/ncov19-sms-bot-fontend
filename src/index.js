import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// GOOGLE CAPTCHA
import { GoogleReCaptchaProvider as CaptchaProvider } from 'react-google-recaptcha-v3'

ReactDOM.render(
  <CaptchaProvider
    reCaptchaKey={process.env.REACT_APP_CAPTCHA_KEY}
  >
    <App />
  </CaptchaProvider>,
  document.getElementById('root')
);