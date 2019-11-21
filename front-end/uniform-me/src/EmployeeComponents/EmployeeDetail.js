import React from 'react'
import fetchUrl from '../uniform-me-client'
import { Link } from 'react-router-dom'
import NotFound from '../NotFound'
import Loading from '../Loading'

class EmployeeDetail extends React.Component {
    state ={
        loading: true
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetchUrl(`employees/${id}`).then( (result) => {
            this.setState({
                id: id,
                employee: result,
                loading: false
            })
        })
    }
    render(){
        if(this.state.loading){
            return (
                <Loading />
            )
        }
        return (
            <div>
                { this.state.employee ?
                Object.keys(this.state.employee).map( (key) => { 
                return (
                    <div>
                        {key} : {this.state.employee[key]}
                    </div>
                )}) : <NotFound /> 
                }
                <br></br>
                <Link to={`${this.state.id}/edit`}>Edit Employee</Link>
            </div>
        )
    }
}
export default EmployeeDetail