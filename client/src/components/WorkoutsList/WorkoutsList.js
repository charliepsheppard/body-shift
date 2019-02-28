import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const WorkoutsList = (props) => {
    const workouts = props.workouts.map((workout, key) => {
        return(
            <div key={key}>
                <h4>{workout.activity}</h4>
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

export default WorkoutsList