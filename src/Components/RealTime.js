import React from 'react';

const RealTime = ({ text, display }) => {
  return (
    <div>
      <h1>Controlled Input Field</h1>

      <h1 className="text-center mb-5 bg-secondary text-white mt-5">
        Real-time Typing
      </h1>
      <h3>{text}</h3>
      <h3>Test after submit: {display}</h3>
    </div>
  );
};

export default RealTime;
