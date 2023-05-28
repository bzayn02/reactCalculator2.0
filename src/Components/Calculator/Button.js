import React from 'react';

const Button = ({ className, label, handleButtonClick }) => {
  return (
    <div
      onClick={() => handleButtonClick(label)}
      className={'btn ' + className}
    >
      {label}
    </div>
  );
};

export default Button;
