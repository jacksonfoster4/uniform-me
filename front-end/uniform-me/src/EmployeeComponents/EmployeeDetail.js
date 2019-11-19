import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'

class EmployeeDetail extends React.Component {
    state ={}
    componentDidMount(){
        let id = this.props.match.params.id
        fetchAuthedUrl(`employees/${id}`).then( (result) => {
            this.setState({
                employee: result,
            })
        })
    }
    render(){
        return (
            <div>
                { this.state.employee ?
                Object.keys(this.state.employee).map( (key) => { 
                return (
                    <div>
                        {key} : {this.state.employee[key]}
                    </div>
                )}) : null 
                }
            </div>
        )
    }
}
export default EmployeeDetail