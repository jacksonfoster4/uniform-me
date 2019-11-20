import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'
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

        fetchAuthedUrl(url, method, body).then( (result) => {
            this.props.history.push("/employees")
        })
    }
    render(){
        return (
            <form onSubmit={ this.submit }>
                <div className="form-group">
                    <label for="exampleFormControlInput1">name</label>
                    <input required type="text" defaultValue={this.props.name} className="form-control" name="name" id="name" placeholder="emmployee name" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">role</label>
                    <input required type="text" defaultValue={this.props.role} className="form-control" name="role" id="role" placeholder="role" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">start date</label>
                    <input type="date" defaultValue="null" defaultValue={this.props.start_date}name="start_date"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">role</label>
                    <select type="text" className="form-control"defaultValue={this.props.specialty} name="specialty" id="specialty" placeholder="specialty">
                        <option value="soft_story">Soft Story</option>
                        <option value="houses">Houses</option>
                        <option value="">N/A</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default withRouter(EmployeesNew)