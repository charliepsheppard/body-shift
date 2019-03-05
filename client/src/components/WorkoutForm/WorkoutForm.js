import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class WorkoutForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propsCheck: this.props,
            activity: '',
            description: '',
            duration: 0,
            submitted: false
        }
    }

    addWorkout = async () => {
        await axios.post('/workouts', this.state)
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

    handleNewWorkoutSubmit = async (e) => {
        e.preventDefault()
        await this.addWorkout()
        this.setState({
            submitted: true
        })
    }

    render() {
        console.log(this.state)  
        const redirectToWorkouts = this.state.submitted
        if (redirectToWorkouts === true) {
            return <Redirect to='/workouts' />
        }
        return (
            <div className='form'>
                <form onChange={this.handleChange} onSubmit={this.handleNewWorkoutSubmit}>
                        <input type="text" name="activity" placeholder="Type" className='form-input' /> 
                    <br />
                        <input type="number" name="duration" placeholder="Duration" className='form-input' />
                    <br /> 
                        <textarea name="description" placeholder="Description" className='form-input' />   
                    <br />
                    <input type="submit" value="Submit" className='form-button' />
                </form>
            </div>
        )
    }
    
}

export default WorkoutForm