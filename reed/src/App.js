import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const toggleLight = () => {
    setIsOn(previous => !previous)
  }

  return (
    <div className="App">
        
        <button onClick={incrementCount}>I was clicked {count} times</button>

      <>
        <h2>Toggle light</h2>
        <div>
          <img
          src={
            isOn ? 'https://icon.now.sh/highlight/fd0' : 'https://icon.now.sh/highlight/aaa' 
          }
          style= {{
            height: "50px",
            width: "50px",
          }}
          alt="Flashlight"
          onClick={toggleLight}
          />
        </div>
      </>
    </div>
  );
}

export default App;
