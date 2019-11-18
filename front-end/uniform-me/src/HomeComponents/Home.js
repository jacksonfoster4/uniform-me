import React, {useEffect} from 'react';

class Home extends React.Component {
    componentDidMount(){
        fetch('http://localhost:8000/api').then(res => res.json()).then(
            (result) => {
                console.log(result)
            }
        )
    }
    
    render(){
        return (
            <div className="mt-4 pt-4 row">
                <div className="col-md-4">
                1
                </div>
                <div className="col-md-4">
                    2
                </div>
                <div className="col-md-4">
                    3
                </div>
            </div>
        );
    }
}
  export default Home;