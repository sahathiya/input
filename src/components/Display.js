import React from 'react';

function Display({ inputValues }) {
  
  const sortedValues = [...inputValues].sort();

  return (
    <div>
      {sortedValues.length > 0 ? (
        <ul>
          {sortedValues.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      ) : (
        <p>No input submitted yet.</p>
      )}
    </div>
  );
}

export default Display;
