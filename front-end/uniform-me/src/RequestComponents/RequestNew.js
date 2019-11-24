import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'
import { withRouter } from 'react-router-dom'
import Loading from '../Loading'
class RequestNew extends React.Component {
    state = {
        loading: true
    }
    componentDidMount(){
        fetchAuthedUrl("inventory/",).then( (result) => {
            this.setState({ items: result})
        })
        fetchAuthedUrl("employees/",).then( (result) => {
            this.setState({ 
                employees: result,
                loading: false
            })
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
            if(this.props.match.params.id){
                this.props.history.push(`/requests/${this.props.match.params.id}`)
            }
            else {
                this.props.history.push("/requests")
            }
        })
    }
    render(){
        if(this.state.loading){
            return (
                <Loading />
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="display-4 text-left pb-4">{this.props.item ? <span>Edit </span> : <span>New </span>}Request</div>
                        <form className="text-left"onSubmit={ this.submit }>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Item</span>
                                        </div>
                                        <select required name="item" defaultValue={this.props.item ? this.props.item['id'] : null} className="form-control" id="item">
                                            { this.state.items ? 
                                                this.state.items.map( (item, index) => { return (
                                                    <option 
                                                    selected={this.props.item ? this.props.item['id'] == item['id'] : false} 
                                                    value={item['id']}> 
                                                        {item['name']} - {item['size']} 
                                                    </option>
                                                )})
                                            : null }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Employee</span>
                                        </div>
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
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Quantity</span>
                                        </div>
                                        <input type="number" class="form-control" name="quantity" defaultValue={this.props.quantity} placeholder="Quantity" aria-label="Quantity" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Date</span>
                                        </div>
                                        <input type="date" class="form-control" name="date" defaultValue={this.props.date} placeholder="Quantity" aria-label="Quantity" aria-describedby="basic-addon1" />
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

export default withRouter(RequestNew)