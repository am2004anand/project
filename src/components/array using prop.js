import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const myArray = [1, 2, 3, 4, 5];

  return (
    <div>
      <ChildComponent data={myArray} />
    </div>
  );
}

export default ParentComponent;
