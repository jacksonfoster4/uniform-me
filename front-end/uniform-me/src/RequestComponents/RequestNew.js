import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'
import { withRouter } from 'react-router-dom'

class RequestNew extends React.Component {
    state = {}
    componentDidMount(){
        fetchAuthedUrl("inventory/",).then( (result) => {
            this.setState({ items: result})
        })
        fetchAuthedUrl("employees/",).then( (result) => {
            this.setState({ employees: result})
        })
    }

    submit = (e) => {
        e.preventDefault()
        let body = {}
        for(let i=0; i < e.target.length; i++){
            let el = e.target[i]
            let key = el.name
            let value = el.value
            body[key] = value
        }
        console.log(body)
        let url = this.props.url ? this.props.url : "requests/new/"
        let method = this.props.method? this.props.method : "POST"

        fetchAuthedUrl(url, method, body).then( (result) => {
            this.props.history.push("/requests")
        })
    }
    render(){
        return (
            <form onSubmit={ this.submit }>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input required type="number" defaultValue={this.props.quantity} className="form-control" name="quantity" id="quantity" placeholder="quantity" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input required type="date" className="form-control" defaultValue={this.props.date} name="date" id="date" placeholder="date" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select required name="employee" defaultValue={this.props.employee ? this.props.employee['id'] : null} className="form-control" id="employee">
                    { this.state.employees ? 
                        this.state.employees.map( (employee, index) => { return (
                            <option 
                            selected={this.props.employee ? this.props.employee['id'] == employee['id'] : false} 
                            value={employee['id']}>
                                {employee['name']}
                            </option>
                        )})
                    : null }
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect2">Example multiple select</label>
                    <select required name="item" defaultValue={this.props.item ? this.props.item['id'] : null} className="form-control" id="item">
                    { this.state.items ? 
                        this.state.items.map( (item, index) => { return (
                            <option 
                            selected={this.props.item ? this.props.item['id'] == item['id'] : false} 
                            value={item['id']}> 
                                {item['name']} 
                            </option>
                        )})
                    : null }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default withRouter(RequestNew)