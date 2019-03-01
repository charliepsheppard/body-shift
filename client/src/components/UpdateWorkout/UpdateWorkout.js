import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class UpdateWorkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: '',
            description: '',
            duration: 0,
            submitted: false
        }
    }
    render() {
        const redirectToWorkouts = this.state.submitted
        if (redirectToWorkouts == true) {
            return <Redirect to={`/workouts`} />
        }
        return(
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <input type="text" name="activity" placeholder="Type" /> 
                <br />
                    <textarea name="description" placeholder="Description" />    
                <br />
                    <input type="number" name="duration" placeholder="Duration" />    
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default UpdateWorkout