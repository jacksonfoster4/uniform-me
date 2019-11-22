import React from 'react'
import fetchUrl from '../uniform-me-client'
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

        fetchUrl(url, method, body).then( (result) => {
            this.props.history.push("/inventory")
        })
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="display-4 text-left pb-4">{this.props.item ? <span>Edit </span> : <span>New </span>}Item</div>
                        <form className="text-left"onSubmit={ this.submit }>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Item Name</span>
                                        </div>
                                        <input type="text" className="form-control" name="name"defaultValue={this.props.name} placeholder="Item Name" aria-label="Item Name" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Quantity</span>
                                        </div>
                                        <input type="number" className="form-control" name="quantity" defaultValue={this.props.quantity} placeholder="Current Stock" aria-label="Quantity" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Reorder Point</span>
                                        </div>
                                        <input type="number" className="form-control" name="reorder_point" defaultValue={this.props.reorder_point} placeholder="Reorder Point" aria-label="Reorder Point" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Need To Reorder</span>
                                        </div>
                                        <input className="form-control text-left border-1 rounded" type="checkbox" name="need_to_reorder" defaultValue={this.props.need_to_reorder} placeholder="Notes" aria-label="Notes" aria-describedby="basic-addon1" />
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

export default withRouter(InventoryNew)