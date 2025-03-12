import { useState } from 'react';
import './index.css';

function Counter() {
  const [count, setCount] = useState(0); // Initial state value is 0

  const handleIncrement = () => {
    setCount(count + 1); // Update the state
    
  };

const handleDecrement = () => {
    if (count > 0) {
        setCount(count - 1);
    } else {
        alert('Cannot decrement below 0');
    }
};

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;