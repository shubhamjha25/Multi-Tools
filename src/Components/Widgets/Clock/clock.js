import React, { useState } from 'react';
// import './clock.css'

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [time1, time2] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        time2(time);
    }
    setInterval(UpdateTime,1000)
    return(
        <>
            {/* <div className="con"></div> */}
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10rem',
             fontSize: '35px', backgroundColor: 'royalblue', paddingBottom: '33rem', height: '100vh'}}>
                <h2 style={{fontFamily: 'monospace'}}>{time1}</h2>
            </div>
        </>
    )
}

export default Clock;
