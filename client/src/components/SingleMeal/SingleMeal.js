import React, {Component} from 'react'

const SingleMeal = (props) => {
    console.log(props.location.state.name)
    return(
        <div>
            <h1>{props.location.state.name}</h1>
        </div>
    )
}

export default SingleMeal