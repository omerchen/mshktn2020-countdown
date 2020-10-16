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
    <div>
      <canvas id="bg-canvas"></canvas>
      
      {/* <!-- First screen --> */}
      <div className="splash">
        <div className="centered-unit">
          <div className="container">
            {/* <!-- Main header --> */}
            <h1>We do our best to launch soon!</h1>
            {/* <!-- Sub header --> */}
            <p className="lead">Dealing with some really complicated stuff here.</p>
            
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
      
      {/* <!-- Second screen --> */}
      <div className="overlap">
      
        {/* <!-- Link "Scroll down to learn more" --> */}
        <a href="" className="more">Scroll down <i className="fa fa-chevron-down"></i> to learn more</a>
        
        {/* <!-- Detailed info --> */}
        <div className="container few-words">
          <div className="row">
            {/* <!-- First column --> */}
            <div className="col col-heading">
              {/* <!-- Detailed info --> */}
              <h2>A few words about our awesome company!</h2>
              
              {/* <!-- Social icons --> */}
              <div className="social">
                {/* <a href="" className="social-icon">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fa fa-google-plus fa-lg"></i>
                </a> */}
                <a href="https://instagram.com/maaas.inc" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa fa-instagram fa-lg"></i>
                </a>
              </div>
              {/* <!-- Social icons block end --> */}
            </div>
            {/* <!-- First column end --> */}
            
            {/* <!-- Second column --> */}
            <div className="col col-content">
  
              <h3>
                SUSTAINABLE <br/>
                DESIGN
              </h3>
         
              <p>
                a term that describes environmentally conscious design techniques in the field of architecture and seeks to minimize the negative environmental impact of buildings by enhancing efficiency and moderation in the use of a materials, energy, and development space
              </p>
            </div>
            {/* <!-- Second column end --> */}
            
            {/* <!-- Third column --> */}
            <div className="col col-contacts">
              <h3>Contact us</h3>
              <div className="contact">
                <span className="icon"><i className="fa fa-phone fa-fw"></i></span>
                <span className="value">+62 851-5600-5454</span>
              </div>
              <div className="contact">
                <span className="icon"><i className="fa fa-envelope-o fa-fw"></i></span>
                <span className="value"><a href="mailto: admin@maaasinc.com">admin@maaasinc.com</a></span>
              </div>
              <div className="contact">
                <span className="icon"><i className="fa fa-map-marker fa-fw"></i></span>
                <span className="value">Jl Kemiri Barat, Sidorejo,<br/>825c Salatiga,<br/>Jawa Tengah, Indonesia</span>
              </div>
            </div>
            {/* <!-- Third column end --> */}
          </div>
          {/* <!-- Footer --> */}
        <div className="footer">
          <div className="container">
            &copy; 2020 Maaas, Inc. All rights reserved.
          </div>
        </div>
        {/* <!-- Footer end --> */}
        </div>
        {/* <!-- Detailed info block end --> */}

        
      </div>
    </div>
  );
}

export default App;
