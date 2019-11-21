import React from 'react'
import EmployeeNew from './EmployeeNew'
import fetchUrl from '../uniform-me-client'

class EmployeeEdit extends React.Component {
    state={
        loading: true
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetchUrl(`employees/${id}`).then((result) => {
            this.setState({
                url: `employees/${id}/edit/`,
                employee: result,
                loading: false
            })
        })
    }
    render(){
        if(this.state.loading){
            return (
                <div>
                    <div>Loading...</div>
                </div>
            )
        }
        return(
            <EmployeeNew {...this.state.employee} url={this.state.url} method="PUT" />
        )
    }
}

export default EmployeeEdit