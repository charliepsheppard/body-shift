import React, {Component} from 'react'
import axios from 'axios'

class UpdateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propsCheck: this.props,
            activity: this.props.workoutToUpdate.activity,
            description: this.props.workoutToUpdate.description,
            duration: this.props.workoutToUpdate.duration,
            submitted: false
        }
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    handleEditWorkoutSubmit = async (e) => {
        e.preventDefault()
        let updatedWorkout = {
            activity: this.state.activity,
            description: this.state.description,
            duration: this.state.duration
        }
        let editId = this.props.workoutToUpdate.id
        await axios.put(`/workouts/${editId}`, updatedWorkout)
        // this.updateWorkout()
        this.setState({
            activity: updatedWorkout.activity,
            description: updatedWorkout.description,
            duration: updatedWorkout.duration,
            submitted: true
        })
    }
    
    render() {
        console.log(this.props.workoutToUpdate)
        return(
            <form onChange={this.handleChange} onSubmit={this.handleEditWorkoutSubmit}>
                    <input type="text" defaultValue={this.state.activity} name="activity" placeholder="Type" /> 
                <br />
                    <textarea name="description" defaultValue={this.state.description} placeholder="Description" />    
                <br />
                    <input type="number" defaultValue={this.state.duration} name="duration" placeholder="Duration" />    
                <br />
                <input type="submit" value="Edit" />
            </form>
        )
    }
}
 
export default UpdateForm