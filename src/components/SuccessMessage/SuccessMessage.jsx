import React from 'react';

export default function SuccessMessage() {
  return (
    <div className="success-container">
      <h2 className="status">Success!</h2>
      <p className="message">You should be receiving a message from us any second.</p>
      <p className="instructions">Just reply to our text with another ZIP code to get updates for that area.</p>
    </div>
  )
}