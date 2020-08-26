import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import './Main.css';
import { NavLink } from 'react-router-dom';

const RenderCard = () => {
    return(
            <div className="container">
                <div className="row">
                    <div className="card-wrap col-12 col-md-5">
                        <Card className="bt-card">
                        <CardBody>
                            <CardTitle className="bt-card-title"><NavLink exact to="/calculator"><h2>Calculator</h2><hr/></NavLink></CardTitle>
                            <CardText>
                                One of the most important thing is time.<br/>
                                Don't Worry.<br/>
                                We also provide a Clock app which will help a lot.<br/>
                            </CardText>
                        </CardBody>
                        </Card>
                        <Card className="bt-card">
                        <CardBody>
                            <CardTitle className="bt-card-title"><NavLink exact to="/todo"><h2>To-Do List</h2><hr/></NavLink></CardTitle>
                            <CardText>
                                It is a health related app,<br/>
                                which will help you a lot.<br/>
                                Happy health!!. 
                            </CardText>
                        </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="card-wrap col-12 col-md-5">
                        <Card className="bt-card">
                        <CardBody>
                            <CardTitle className="bt-card-title"><NavLink exact to="/clock"><h2>Clock</h2><hr/></NavLink></CardTitle>
                            <CardText>
                                One of the most important thing is time.<br/>
                                Don't Worry.<br/>
                                We also provide a Clock app which will help a lot.<br/>
                            </CardText>
                        </CardBody>
                        </Card>
                        <Card className="bt-card">
                        <CardBody>
                            <CardTitle className="bt-card-title"><NavLink exact to="/stopwatch"><h2>Stop Watch</h2><hr/></NavLink></CardTitle>
                            <CardText>
                                It is a health related app,<br/>
                                which will help you a lot.<br/>
                                Happy health!!. 
                            </CardText>
                        </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
    );
}

const Menu = () => {
    return(
        <RenderCard />
    );
}

export default Menu;