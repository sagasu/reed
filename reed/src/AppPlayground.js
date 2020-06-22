import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const initialLocationState = {
 latitude: null,
 longitude: null,
 speed: null
}

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: null, y: null});

  const [location, setLocation] = useState(initialLocationState);
  let mounted = true;
  const [status, setStatus] = useState(navigator.onLine);
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const toggleLight = () => {
    setIsOn(previous => !previous)
  }

  const handleGeolocation = (event) => {
    if(mounted){
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      });
    }
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    }
  })

  const handleOnline = () => {
    setStatus(true);
  }

  const handleOffline = () => {
    setStatus(false);
  }

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

        <h2>Network status</h2>
        <p>You are <strong>{status ? "online" : "offline"}</strong></p>

        <h2>Geolocation</h2>
        <p>latitude is {location.latitude}</p>
        <p>longitude is {location.longitude}</p>
        <p>speed is {location.speed ? location.speed : 0}</p>
      </>
    </div>
  );
}

export default App;
