import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={incrementCount}>I was clicked {count} times</button>

      </header>
    </div>
  );
}

export default App;
