import React from 'react';
import fetchUrl from '../uniform-me-client'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

class Home extends React.Component {
    state = {
        loading: true
    }
    componentDidMount(){
        fetchUrl("home").then( (result) => {
            this.setState(result)
            this.setState({loading: false})
        })
    }
    
    render(){
        if(this.state.loading){
            return (
                <div className="mt-4 pt-4 ">
                    <Loading />
                </div>
            )
        }
        return (
            <div className="mt-4 pt-4 row">
    
                { this.state.thirty_day_alerts && this.state.thirty_day_alerts.length ?
                    <div class="mt-2 col-md-4">
                        <div class="card">
                        <h5 class="card-header">30 Day Employment Alerts</h5>
                        <div class="card-body">
                            <h5 class="card-title">The following people have reached their 30 day mark...</h5>
                            <p class="card-text">
                                <ul>
                                { this.state.thirty_day_alerts.slice(0,3).map( (name) => { return (
                                    <li>{name}</li>
                                ) } )}
                                </ul>
                            </p>
                            <Link to="employees/" class="btn btn-primary">See employees</Link>
                        </div>
                        </div> 
                    </div> : null }

                { this.state.reorder_alerts && this.state.reorder_alerts.length ?
                <div class="mt-2 col-md-4">
                    <div class="card">
                    <h5 class="card-header">Reorder Alerts</h5>
                    <div class="card-body">
                        <h5 class="card-title">The following items need to be reordered soon</h5>
                        <p class="card-text">
                            <ul>
                            { this.state.reorder_alerts.slice(0,3).map( (item) => { return (
                                <li>{item}</li>
                            ) } )}
                            </ul>
                        </p>
                        <Link to="inventory/" class="btn btn-primary">See Items</Link>
                    </div>
                    </div> 
                </div> : null }

                { this.state.distribution_totals && Object.keys(this.state.distribution_totals).length ?
                <div class="mt-2 col-md-4">
                    <div class="card">
                    <h5 class="card-header">Distribution Totals</h5>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                            <ul>
                            {Object.keys(this.state.distribution_totals).map( (key) => { return (
                                <li>
                                    {key} -- { this.state.distribution_totals[key]}
                                </li>
                            )}) }
                            </ul>
                        </p>
                        <Link to="inventory/" class="btn btn-primary">See More</Link>
                    </div>
                    </div> 
                </div> : null }

                { this.state.most_requested_item ?
                <div class="mt-2 col-md-4">
                    <div class="card">
                    <h5 class="card-header">Most Requested Item</h5>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                            {this.state.most_requested_item[0]}
                        </p>
                        <Link to={`inventory/${this.state.most_requested_item[1]}`} class="btn btn-primary">See More</Link>
                    </div>
                    </div> 
                </div> : null }

                { this.state.number_of_active_requests ?
                <div class="mt-3 col-md-4">
                    <div class="card">
                    <h5 class="card-header">Number of Active Requests</h5>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                        {this.state.number_of_active_requests}
                        </p>
                        <Link to="requests/" class="btn btn-primary">See More</Link>
                    </div>
                    </div> 
                </div> : null }

            </div>
        );
    }
}
  export default Home;