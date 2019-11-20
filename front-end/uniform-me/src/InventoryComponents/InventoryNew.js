import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'
import { withRouter } from 'react-router-dom'

class InventoryNew extends React.Component {
    state = {}
    
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
        fetchAuthedUrl("inventory/new/", "POST", body).then( (result) => {
            this.props.history.push("/inventory")
        })
    }
    render(){
        return (
            <form onSubmit={ this.submit }>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input required type="text" className="form-control" name="name" id="name" placeholder="item name" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input required type="text" className="form-control" name="quantity" id="quantity" placeholder="quantity" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <input type="checkbox" value="true" name="need_to_reorder"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default withRouter(InventoryNew)