import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UpdateWorkoutForm from '../UpdateWorkoutForm/UpdateWorkoutForm'

class SingleWorkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editClicked: false
        }
    }

    // renderEditForm = () => {
    //     return (
    //         <UpdateForm />
    //     )
    // }

    renderForm = () => {
        this.setState({
            editClicked:true
        })
    }

    render() {
        if (this.state.editClicked == false) {
            return(
            <div>
                <h1>{this.props.location.state.activity}</h1>
                <p>{this.props.location.state.description}</p>
                <p>{this.props.location.state.duration}</p>
                <button onClick={this.renderForm}>Edit</button>
            </div>
            )
        } else if (this.state.editClicked == true) {
            return (
                <div>
                    <UpdateWorkoutForm workoutToUpdate={this.props.location.state} />
                </div>
            )
        }   
    }
    
}

export default SingleWorkout