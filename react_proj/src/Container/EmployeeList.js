import React,{ Component } from "react";
import {connect} from 'react-redux';

class EmployeeList extends Component{
    constructor(props){
        super(props)
    }
        render(){
            console.log(this.props)
            return(
            <React.Fragment>
                <table>   
                    <thead>     
                        <td>Employee Name</td>   
                        <td>Age</td> 
                        <td>Gender</td> 
                        <td>e-mail</td> 
                        <td>Contact number</td> 
                    </thead>  
                    <tbody>{this.props.user.map(emp=> 
                    <tr>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.email}</td>
                        <td>{emp.phoneNo}</td>
                    </tr>)}
                    </tbody>  
                </table>

            </React.Fragment>
        )}
}
let mapStateToProps= (state)=>{
    return state
}
export default connect(mapStateToProps)(EmployeeList)