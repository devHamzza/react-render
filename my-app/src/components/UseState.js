 import React, { useState } from 'react';
 
 const UseState = () => {
  const [count, setCount] = useState(0);

  console.log('UseState render');
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(5)}>Count to 5</button>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
    </div>
  );
}

export default UseState;
 
//  Now, let’s create a new component that uses the  UseState  component.