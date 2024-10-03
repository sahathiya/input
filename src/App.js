import React, { useState } from 'react';
import Input from './components/Input'; 
import Display from './components/Display';

function App() {
  const [inputValues, setInputValues] = useState([]);

  const handleAddValue = (value) => {
    setInputValues((prevValues) => [...prevValues, value]);
  };

  return (
    <div>
      <h1>Input and Display</h1>
      <Input onAdd={handleAddValue} />
      <Display inputValues={inputValues} />
    </div>
  );
}

export default App;
