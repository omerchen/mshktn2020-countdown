import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from 'react-countdown';
import Logo from "./logo3.svg"
 
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
    <div>
      <canvas id="bg-canvas"></canvas>
      
      {/* <!-- First screen --> */}
      <div className="splash">
        <div className="logoWrapper"><img src={Logo}/></div>
        <div className="centered-unit">

          <div className="container">
            {/* <!-- Main header --> */}
            <p className="lead" style={{fontSize:20, fontWeight:200}}>#MSHKTN <span style={{fontWeight:900, color:"#4f69ed"}}>2020</span></p>
            <h1 className="cst" style={{fontWeight:100, color:"#4f69ed"}}>COMING SOON</h1>
            {/* <!-- Sub header --> */}
            
            {/* <!-- Countdown --> */}
            <div className="countdown circled large">
              {/* <!-- Days --> */}
              <div className="time days">
                <div className="value">00</div>
                <div className="unit">Days</div>
              </div>
              {/* <!-- Hours --> */}
              <div className="time hours">
                <div className="value">00</div>
                <div className="unit">Hours</div>
              </div>
              {/* <!-- Minutes --> */}
              <div className="time minutes">
                <div className="value">00</div>
                <div className="unit">Minutes</div>
              </div>
              {/* <!-- Seconds --> */}
              <div className="time seconds">
                <div className="value">00</div>
                <div className="unit">Seconds</div>
              </div>
            </div>
            {/* <!-- Countdown end --> */}
          </div>	
        </div>
      </div>
        
    </div>
  );
}

export default App;
