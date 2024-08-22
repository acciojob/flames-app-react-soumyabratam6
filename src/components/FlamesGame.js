import React, { useState } from 'react';

const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    if (name1 === '' || name2 === '') {
      setResult('Please Enter valid input');
      return;
    }

    // Remove common characters
    let tempName1 = name1;
    let tempName2 = name2;

    for (let char of name1) {
        console.log(char);
      if (tempName2.includes(char)) {
        tempName1 = tempName1.replace(char, '');
        tempName2 = tempName2.replace(char, '');
      }
    }

    const totalLength = tempName1.length + tempName2.length;
    const flamesResult = totalLength % 6;

    switch (flamesResult) {
      case 1:
        setResult('Friends');
        break;
      case 2:
        setResult('Love');
        break;
      case 3:
        setResult('Affection');
        break;
      case 4:
        setResult('Marriage');
        break;
      case 5:
        setResult('Enemy');
        break;
      case 0:
        setResult('Siblings');
        break;
      default:
        setResult('Please Enter valid input');
    }
  };

  const clearFields = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div>
      <input
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        data-testid="input1"
        placeholder="Enter first name"
      />
      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        data-testid="input2"
        placeholder="Enter second name"
      />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship
      </button>
      <button onClick={clearFields} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default FlamesGame;
