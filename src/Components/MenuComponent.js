import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';

const RenderCard = () => {
    return(
        <div className="wrap">
        <div className="container">
            <div className="card-wrap">
                <div className="bt-card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title"><NavLink exact to="/calculator"><h2>Calculator</h2><hr/></NavLink></h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="bt-card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className=".bt-card-title"><NavLink exact to="/todo"><h2>To-Do List</h2><hr/></NavLink></h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <div className="card-wrap">
                <div className="bt-card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className=".bt-card-title"><NavLink exact to="/clock"><h2>Clock</h2><hr/></NavLink></h5>
                        <p className="card-text">One of the most important thing is time.<br/>Don't Worry.<br/>We also provide a Clock app which will help a lot.<br/></p>
                    </div>
                </div>

                <div className="bt-card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className=".bt-card-title"><NavLink exact to="/stopwatch"><h2>Stop Watch</h2><hr/></NavLink></h5>
                        <p className="card-text">It is a health related app,<br/>which will help you a lot.<br/>Happy health!!. </p>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
}


const Menu = () => {
    return(
        <>
            <RenderCard />
        </>
    );
}

export default Menu;