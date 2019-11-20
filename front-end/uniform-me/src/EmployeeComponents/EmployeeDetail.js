import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'
import { Link } from 'react-router-dom'

class EmployeeDetail extends React.Component {
    state ={}
    componentDidMount(){
        let id = this.props.match.params.id
        fetchAuthedUrl(`employees/${id}`).then( (result) => {
            this.setState({
                id: id,
                employee: result,
            })
        })
    }
    render(){
        return (
            <div>
                { this.state.employee ?
                Object.keys(this.state.employee).map( (key) => { 
                return (
                    <div>
                        {key} : {this.state.employee[key]}
                    </div>
                )}) : null 
                }
                <br></br>
                <Link to={`${this.state.id}/edit`}>Edit Employee</Link>
            </div>
        )
    }
}
export default EmployeeDetail