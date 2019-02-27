import React, {Component} from 'react'

const WorkoutsList = (props) => {
    const workouts = props.workouts.map((workout, key) => {
        return(
            <div key={key}>
                <h4>{workout.activity}</h4>
            </div>
        )
    })
    return(
        <h1>{workouts}</h1>
    )
}

export default WorkoutsList