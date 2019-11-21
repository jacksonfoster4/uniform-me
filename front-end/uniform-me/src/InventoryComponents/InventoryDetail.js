import React from 'react'
import fetchUrl from '../uniform-me-client'
import { Link } from 'react-router-dom'

class InventoryDetail extends React.Component {
    state ={}
    componentDidMount(){
        let id = this.props.match.params.id
        fetchUrl(`inventory/${id}`).then( (result) => {
            this.setState({
                id: id,
                item: result,
            })
        })
    }
    render(){
        return (
            <div>
                { this.state.item ?
                Object.keys(this.state.item).map( (key) => { 
                return (
                    <div>
                        {key} : {this.state.item[key]}
                    </div>
                )}) : null 
                }
                <br></br>
                <Link to={`${this.state.id}/edit`}>Edit Item</Link>
            </div>
        )
    }
}
export default InventoryDetail