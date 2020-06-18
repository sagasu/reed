import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: null, y: null});

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const toggleLight = () => {
    setIsOn(previous => !previous)
  }

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
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

        <h2>Mouse position</h2>
        {JSON.stringify(mousePosition, null, 2)}
        <br/>
      </>
    </div>
  );
}

export default App;
