import React from 'react';

class Employees extends React.Component {
    state = {}
    componentDidMount(){
        fetch("http://192.168.1.138:8000/api/employee").then(res => res.json()).then(
            (result) => {
                this.setState({
                    employees: result
                })
            }
        )
    }
    render(){
        return (
            <div>
            { this.state.employees ? 
                this.state.employees.map( (employee) => { return(
                    <div>
                        {employee['name']} | {employee['role']}
                    </div>    
                )})
                : null}
            </div>
            
        );
    }
  }
  
  export default Employees;