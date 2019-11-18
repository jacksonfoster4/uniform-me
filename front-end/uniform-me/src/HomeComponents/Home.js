import React from 'react';

class Home extends React.Component {
    state = {}
    componentDidMount(){
        fetch('http://192.168.1.138:8000/api/home').then(res => res.json()).then(
            (result) => {
                this.tmp = {}
                Object.keys(result).map( (key) => {
                    this.tmp[key] = result[key]
                })
                this.setState(this.tmp)
                console.log(this.tmp)
            }
        )
    }
    
    render(){
        return (
            <div className="mt-4 pt-4 row">
    
                { this.state.thirty_day_alerts ? 
                    this.state.thirty_day_alerts.map( (name) => { return (
                        <div className="col-md-4 mb-4">
                            30 day employment<br></br>
                            {name}
                        </div>
                    )}) : null }
                
                { this.state.reorder_alerts ? 
                    this.state.reorder_alerts.map( (item) => { return (
                        <div className="col-md-4 mb-4">
                            Reorder Alert<br></br>
                            {item}
                        </div>
                    )}) : null }
                    
                { this.state.distribution_totals ? 
                    Object.keys(this.state.distribution_totals).map( (key) => { return (
                        <div className="col-md-4 mb-4">
                            {key}<br></br>
                            {this.state.distribution_totals[key]}
                        </div>
                    )}) : null }

                { this.state.most_requested_item ? 
                    <div className="col-md-4">
                        Most Requested Item<br></br>
                        {this.state.most_requested_item}
                    </div>  : null }
                
                    { this.state.number_of_active_requests ? 
                    <div className="col-md-4">
                        Active Requests<br></br>
                        {this.state.number_of_active_requests}
                    </div>  : null }

            </div>
        );
    }
}
  export default Home;