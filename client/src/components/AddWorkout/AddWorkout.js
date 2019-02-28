import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class AddWorkout extends Component {
    constructor() {
        super()
        this.state = {
            activity: '',
            description: '',
            duration: 0
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

    handleSubmit = (e) => {
        e.preventDefault()
        this.addWorkout()
    }

    render() {
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

export default AddWorkout