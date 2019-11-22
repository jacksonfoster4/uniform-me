import React from 'react'
import fetchUrl from '../uniform-me-client'
import { withRouter } from 'react-router-dom'

class EmployeesNew extends React.Component {
    state = {}
    
    submit = (e) => {
        e.preventDefault()
        let body = {}
        for(let i=0; i < e.target.length; i++){
            let el = e.target[i]
            let key = el.name
            let value = el.value
            if(value){
                el.type == "checkbox" ? body[key] = el.checked : body[key] = value
            }
        }
        console.log(body)
        let url = this.props.url ? this.props.url : "employees/new/"
        let method = this.props.method? this.props.method : "POST"

        fetchUrl(url, method, body).then( (result) => {
            this.props.history.push("/employees")
        })
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="display-4 text-left pb-4">{this.props.name ? <span>Edit </span> : <span>New </span>}Employee</div>
                        <form className="text-left"onSubmit={ this.submit }>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Employee Name</span>
                                        </div>
                                        <input type="text" class="form-control" name="name"defaultValue={this.props.name} placeholder="Employee Name" aria-label="Employee Name" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Role</span>
                                        </div>
                                        <input type="text" class="form-control" name="role"defaultValue={this.props.role} placeholder="Role" aria-label="Role" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Start Date</span>
                                        </div>
                                        <input type="date" class="form-control" name="start_date" defaultValue={this.props.start_date} placeholder="Start Date" aria-label="Start Date" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Notes</span>
                                        </div>
                                        <textarea class="form-control" name="notes" defaultValue={this.props.notes} placeholder="Notes" aria-label="Notes" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EmployeesNew)