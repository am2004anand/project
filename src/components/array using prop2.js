import React from 'react';

function ChildComponent(props) {
  // Access the array prop using props.myArrayProp
  const myArray = props.myArrayProp;

  return (
    <div>
      <h2>Array from Parent Component:</h2>
      <ul>
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;





