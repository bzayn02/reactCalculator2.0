import { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const buttons = [
    {
      className: 'clear',
      label: 'AC',
    },
    {
      className: 'backspace',
      label: '⬅︎',
    },
    {
      className: 'percent',
      label: '%',
    },
    {
      className: 'divide',
      label: '/',
    },
    {
      className: 'no-7',
      label: '7',
    },
    {
      className: 'no-8',
      label: '8',
    },
    {
      className: 'no-9',
      label: '9',
    },
    {
      className: 'multiply',
      label: '*',
    },
    {
      className: 'no-4',
      label: '4',
    },
    {
      className: 'no-5',
      label: '5',
    },
    {
      className: 'no-6',
      label: '6',
    },
    {
      className: 'minus',
      label: '-',
    },
    {
      className: 'no-1',
      label: '1',
    },
    {
      className: 'no-2',
      label: '2',
    },
    {
      className: 'no-3',
      label: '3',
    },
    {
      className: 'add',
      label: '+',
    },
    {
      className: 'no-0',
      label: '0',
    },
    {
      className: 'dot',
      label: '.',
    },
    {
      className: 'equal',
      label: '=',
    },
  ];

  const operators = ['+', '-', '*', '/', '%'];
  const [displayValue, setDisplayValue] = useState('');
  const [lastOperator, setLastOperator] = useState('');

  const handleButtonClick = (val) => {
    console.log('BUtton clicked.', val);
    if (val === 'AC') {
      return setDisplayValue('');
    }

    if (val === '⬅︎') {
      return setDisplayValue(displayValue.slice(0, -1));
    }

    if (val === '=') {
      const lastCharacter = displayValue[displayValue.length - 1];
      let tempStringValue = displayValue;

      if (operators.includes(lastCharacter)) {
        tempStringValue = setDisplayValue(displayValue.slice(0, -1));
      }
      const total = eval(tempStringValue);
      return setDisplayValue(total.toString());
    }

    if (operators.includes(val)) {
      // if there's not value in the screen, to not let user to display operators
      if (!displayValue && val !== '-') {
        return;
      }
      let tempStringValue = displayValue;
      const lastCharacter = displayValue[displayValue.length - 1];

      if (operators.includes(lastCharacter)) {
        tempStringValue = displayValue.slice(0, -1);
      }

      setDisplayValue(tempStringValue + val);
      setLastOperator(val);
      return;
    }

    setDisplayValue(displayValue + val);
  };

  return (
    <div className="wrapper">
      <h1>Prank Calculator 🤫</h1>
      <div className="calculator">
        <div className="display">{displayValue}</div>
        {buttons.map((item, index) => (
          <Button
            handleButtonClick={handleButtonClick}
            key={index}
            className={item.className}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
