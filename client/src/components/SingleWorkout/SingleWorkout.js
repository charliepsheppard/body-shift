import React, {Component} from 'react'

const SingleWorkout = (props) => {
    return(
        <div>
            <h1>{props.location.state.activity}</h1>
        </div>
    )
}

export default SingleWorkout