import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class WorkoutForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: '',
            description: '',
            duration: 0,
            submitted: false
        }
    }

    addWorkout = async () => {
        await axios.post('/workouts', this.state)
    } 

    updateWorkout = async () => {
        await axios.put(`/workouts/`)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    // checkSubmittedForm = () => {
    //     if (this.state.submitted == true) {
    //         return (
    //         <Redirect to='/workouts' />
    //         )
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        this.addWorkout()
        this.setState({
            submitted: true
        })
    }

    render() {
        const redirectToWorkouts = this.state.submitted
        if (redirectToWorkouts == true) {
            return <Redirect to='/workouts' />
        }
        console.log(this.state.editClicked)
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

export default WorkoutForm