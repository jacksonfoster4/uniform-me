import React from 'react'
import fetchUrl from '../uniform-me-client'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import NotFound from '../NotFound'

class InventoryDetail extends React.Component {
    state ={
        loading: true
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetchUrl(`inventory/${id}`).then( (result) => {
            this.setState({
                id: id,
                item: result,
                loading: false
            })
        })
    }
    render(){
        if(this.state.loading){
            return (
                <div>
                    <Loading />
                </div>
            )
        }
        return (
            <div>
                { this.state.item ?
                    <h1 className="display-4">
                        {this.state.item['name']}
                    </h1>
                : <NotFound /> 
                }
                <br></br>
                <Link to={`${this.state.id}/edit`}>Edit Item</Link>
            </div>
        )
    }
}

export default InventoryDetail