import React, {Component} from 'react'
import './SingleWorkout.css'
import UpdateWorkoutForm from '../UpdateWorkoutForm/UpdateWorkoutForm'

class SingleWorkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editClicked: false
        }
    }

    renderForm = () => {
        this.setState({
            editClicked:true
        })
    }

    render() {
        if (this.state.editClicked === false) {
            return(
                <div className='single-page'>
                    <h1>{this.props.location.state.activity}</h1>
                    <p>{this.props.location.state.description}</p>
                    <p>{this.props.location.state.duration}</p>
                    <button onClick={this.renderForm}>Edit</button>
                </div>
            )
        } else if (this.state.editClicked === true) {
            return (
                <div className='single-page'>
                    <UpdateWorkoutForm workoutToUpdate={this.props.location.state} />
                </div>
            )
        }   
    }
    
}

export default SingleWorkout