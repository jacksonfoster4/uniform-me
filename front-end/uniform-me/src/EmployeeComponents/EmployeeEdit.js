import React from 'react'
import EmployeeNew from './EmployeeNew'
import fetchUrl from '../uniform-me-client'

class EmployeeEdit extends React.Component {
    state={
        loading: true
    }
    delete = (employee) => {
        if(window.confirm("Are you sure you want to delete this employee?")){
            fetchUrl(`/employees/${employee.id}/delete/`, "DELETE").then( (result) => {
                this.props.history.replace('/employees')
                window.location.reload() }
            )
        } 
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetchUrl(`employees/${id}`).then((result) => {
            this.setState({
                url: `employees/${id}/edit/`,
                employee: result,
                loading: false
            })
        })
    }
    render(){
        if(this.state.loading){
            return (
                <div>
                    <div>Loading...</div>
                </div>
            )
        }
        return(
            <div>
                <EmployeeNew {...this.state.employee} url={this.state.url} method="PUT" />
                <div className="mt-4 container">
                    <div className="pt-4 row">
                        <div className="col-md-12 text-left">
                            <button className="btn btn-sm btn-danger" onClick={() => this.delete(this.state.employee)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default EmployeeEdit