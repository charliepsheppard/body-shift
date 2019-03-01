import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SingleWorkout extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <div>
                <h1>{this.props.location.state.activity}</h1>
                <p>{this.props.location.state.description}</p>
                <p>{this.props.location.state.duration}</p>
                <Link to={`/add-workout/${this.props.location.state.id}`}>
                    <button onClick={this.editClicked}>Edit</button>
                </Link>
            </div>
        )    
    }
    
}

export default SingleWorkout