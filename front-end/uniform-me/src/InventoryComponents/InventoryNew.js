import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'
import { withRouter } from 'react-router-dom'

class InventoryNew extends React.Component {
    
    submit = (e) => {
        e.preventDefault()
        let body = {}
        for(let i=0; i < e.target.length; i++){
            let el = e.target[i]
            let key = el.name
            let value = el.value
            el.type == "checkbox" ? body[key] = el.checked : body[key] = value
        }
        console.log(body)
        // update view also uses this component
        let url = this.props.url ? this.props.url : "inventory/new/"
        let method = this.props.method? this.props.method : "POST"

        fetchAuthedUrl(url, method, body).then( (result) => {
            this.props.history.push("/inventory")
        })
    }
    render(){
        return (
            <form onSubmit={ this.submit }>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input required type="text" defaultValue={this.props.name} className="form-control" name="name" id="name" placeholder="item name" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input required type="text" defaultValue={this.props.quantity}className="form-control" name="quantity" id="quantity" placeholder="quantity" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <input type="checkbox" defaultValue={this.props.need_to_reorder}value="true" name="need_to_reorder"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default withRouter(InventoryNew)