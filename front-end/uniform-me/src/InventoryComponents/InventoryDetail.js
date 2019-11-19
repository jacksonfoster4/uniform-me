import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'

class InventoryDetail extends React.Component {
    state ={}
    componentDidMount(){
        let id = this.props.match.params.id
        fetchAuthedUrl(`inventory/${id}`).then( (result) => {
            this.setState({
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
            </div>
        )
    }
}
export default InventoryDetail