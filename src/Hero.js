import { useState } from 'react';

import FormComp from './Components/FormComp';
import RealTime from './Components/RealTime';
import Counter from './Components/Counter';

const Hero = () => {
  const initialValue = '';
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(initialValue);
  const [display, setDisplay] = useState();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleOnReset = () => {
    setCounter(0);
  };
  const increaseByTwo = () => {
    setCounter(counter + 2);
  };

  // handles the change on the input field
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  // handles while submit button is clicked

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(text);
  };
  return (
    <div>
      <Counter
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleOnReset={handleOnReset}
        increaseByTwo={increaseByTwo}
        counter={counter}
      />
      <FormComp
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <RealTime text={text} display={display} />
    </div>
  );
};

export default Hero;
