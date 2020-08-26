import React, { Component } from 'react';
import './Main.css';
import Calculator from '../Components/Widgets/Calculator/Calculator';
import ToDoList from '../Components/Widgets/ToDo-List/ToDo';
import Clock from '../Components/Widgets/Clock/clock';
import StopWatch from '../Components/Widgets/stop-watch/StopWatch';
import { Switch, Route} from 'react-router-dom';
import Menu from './MenuComponent'

class Main extends Component{
    render(){
        return(
            <>
                <Switch>
                    <Route exact path="/" component={Menu} />
                    <Route exact path="/calculator" component={Calculator} />
                    <Route exact path="/todo" component={ToDoList} />
                    <Route exact path="/stopwatch" component={StopWatch} />
                    <Route exact path="/clock" component={Clock} />
                </Switch>
            </>
        );
    }
}


export default Main;