import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import './Main.css';

class Main extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="card-wrap col-12 col-md-5">
                        <Card className="bt-card">
                        <CardBody>
                            <CardTitle className="bt-card-title"><h2>Calculator</h2><hr/></CardTitle>
                            <CardText>
                                It is simple daily use Calculator, which you get at your finger tips.<br/>
                                We made it by using <em>React.js</em>.<br/>
                                Hope you use it.
                            </CardText>
                        </CardBody>
                        </Card>
                        <Card className="bt-card">
                        <CardBody>
                            <CardTitle className="bt-card-title"><h2>Todo-List</h2><hr/></CardTitle>
                            <CardText>
                                It is a simple app which keeps record of your daily works.<br/>
                                You need not worry with the timings of your tasks, as it will notify you.<br/>
                                Hope it will keep you in a track.
                            </CardText>
                        </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="card-wrap col-12 col-md-5">
                        <Card className="bt-card">
                        <CardBody>
                            <CardTitle className="bt-card-title"><h2>Clock</h2><hr/></CardTitle>
                            <CardText>
                                One of the most important thing is time.<br/>
                                Don't Worry.<br/>
                                We also provide a Clock app which will help a lot.<br/>
                            </CardText>
                        </CardBody>
                        </Card>
                        <Card className="bt-card">
                        <CardBody>
                            <CardTitle className="bt-card-title"><h2>Stop-Watch</h2><hr/></CardTitle>
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
}


export default Main;