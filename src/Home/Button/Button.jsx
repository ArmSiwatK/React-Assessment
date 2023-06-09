import React from 'react';

const Button = ({ text, onClick }) => (
  <button className="big-button" onClick={onClick}>
    {text}
  </button>
);

export default Button;