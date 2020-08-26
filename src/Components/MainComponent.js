import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'

class Main extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <Card style={{ width: '18rem', margin: '1rem', backgroundColor: 'burlywood' }}>
                        <CardBody>
                            <CardTitle>Calculator<hr/></CardTitle>
                            <CardText>
                                It is simple daily use Calculator, which you get at your finger tips.<br/>
                                We made it by using <em>React.js</em>.<br/>
                                Hope you use it.
                            </CardText>
                        </CardBody>
                        </Card>
                        <Card style={{ width: '18rem', margin: '1rem', backgroundColor: 'burlywood' }}>
                        <CardBody>
                            <CardTitle>Todo-List<hr/></CardTitle>
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
                    <div className="col-12 col-md-5">
                        <Card style={{ width: '18rem', margin: '1rem', backgroundColor: 'burlywood' }}>
                        <CardBody>
                            <CardTitle>Clock<hr/></CardTitle>
                            <CardText>
                                One of the most important thing is time.<br/>
                                Don't Worry.<br/>
                                We also provide a Clock app which will help a lot.<br/>
                            </CardText>
                        </CardBody>
                        </Card>
                        <Card style={{ width: '18rem', margin: '1rem', backgroundColor: 'burlywood' }}>
                        <CardBody>
                            <CardTitle>Stop-Watch<hr/></CardTitle>
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
        )
    }
}


export default Main;