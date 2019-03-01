import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class WorkoutsList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const workouts = this.props.workouts.map((workout, key) => {
            return(
                <div key={key}>
                    <Link 
                        id={workout.id}
                        to={{pathname: `/workouts/${workout.id}`, state: workout}}
                        onClick={this.props.selectWorkout}>
                        {workout.activity}
                    </Link>
                </div>
            )
        })
        return(
                <div>
                    <Link to='/add-workout'><button>Add A Workout</button></Link>
                    <h1>{workouts}</h1>
                </div>
            )
    }
    
    
}

export default WorkoutsList