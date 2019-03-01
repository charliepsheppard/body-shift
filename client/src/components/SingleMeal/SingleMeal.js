import React, {Component} from 'react'

const SingleMeal = (props) => {
    console.log(props.location.state.name)
    return(
        <div>
            <h1>{props.location.state.name}</h1>
            <p>{props.location.state.ingredients}</p>
            <p>{props.location.state.prep}</p>
            <p>{props.location.state.cooktime}</p>
            <p>{props.location.state.calories}</p>
        </div>
    )
}

export default SingleMeal