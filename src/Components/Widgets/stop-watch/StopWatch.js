import React, { useState } from 'react';
import './stop-watch.css';

function BtnComponent(props) {
    return (
      <div>
        {(props.status === 0)? 
          <button className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}>Start</button> : ""
        }
  
        {(props.status === 1)? 
          <div>
            <button className="stopwatch-btn stopwatch-btn-red"
                    onClick={props.stop}>Stop</button>
            <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={props.reset}>Reset</button>
          </div> : ""
        }
  
       {(props.status === 2)? 
          <div>
            <button className="stopwatch-btn stopwatch-btn-gre"
                    onClick={props.resume}>Resume</button>
            <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={props.reset}>Reset</button>
          </div> : ""
        }
       
      </div>
    );
  }

  function DisplayComponent(props) {
    const h = () => {
       if(props.time.h === 0){
         return '';
       }else {
         return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
       }
    }
    return (
      <div>
         {h()}&nbsp;&nbsp;
         <span>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>&nbsp;:&nbsp;
         <span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>&nbsp;:&nbsp;
         <span>{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms}</span>
      </div>
    );
  }


const StopWatch = () => {
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();
    return (
        // <div>
        //     <h2>Stopwatch</h2>
        // </div>
        
        <div className="container">
            <div className="text"><h1><u>StopWatch</u></h1></div>
        <div className="main-section">
        <div className="clock-holder">
        <div className="stopwatch">
            <DisplayComponent time={time}/>
            <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
        </div>
        </div>
        </div>
        </div>        
    );
}

export default StopWatch;