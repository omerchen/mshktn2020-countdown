import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from 'react-countdown';
 
// Random component
const Completionist = () => <span>You are good to go!</span>;
 
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</span>;
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We Will Back On
        </p>
        
        <Countdown date={new Date("2020-10-30").getTime()}
        renderer={renderer}/>
      </header>
    </div>
  );
}

export default App;
