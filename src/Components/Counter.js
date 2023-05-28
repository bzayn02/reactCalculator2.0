import React from 'react';
import { Button } from 'react-bootstrap';

const Counter = ({
  handleDecrement,
  handleIncrement,
  handleOnReset,
  increaseByTwo,
  counter,
}) => {
  return (
    <div>
      <h1 className="text-center mb-5 bg-secondary text-white">
        Counter Application
      </h1>
      <h3>Initial value:{counter} </h3>
      <div className="mb-4 gap-3">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleOnReset}>Reset</Button>
        <Button onClick={increaseByTwo}>Increase By Two</Button>
      </div>
    </div>
  );
};

export default Counter;
