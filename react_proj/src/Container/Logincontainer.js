import React,{ Component } from "react";
import users from './users.json';
import {withRouter} from 'react-router-dom'

class Logincontainer extends Component{
    constructor(props){
        super(props)
    }
    state={
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(e.target[0].value === users.username && e.target[1].value === users.password){
            this.props.history.push('/employee')
        }
        else
        console.log(users)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>:&nbsp;
                    <input type="text" name="username" id='username'/><br/>
                    <label htmlFor='password'>Password</label>:&nbsp;
                    <input type="password" name="password" id='password'/><br/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Logincontainer);