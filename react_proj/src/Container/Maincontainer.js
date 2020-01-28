import React,{ Component } from "react";
import Logincontainer from './Logincontainer';
import {Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom'
import EmployeeList from "./EmployeeList";

class Maincontainer extends Component{

    render(){
        return(
            <React.Fragment>
                    <Switch>
                        <Route exact path='/' component={Logincontainer}/>
                        <Route path='/employee' component={EmployeeList}/>
                    </Switch>
                </React.Fragment>
        )
    }
}
export default Maincontainer