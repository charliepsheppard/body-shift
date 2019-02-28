import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const MealsList = (props) => {
    const meals = props.meals.map((meal, key) => {
        return (
            <div key={key}>
                {meal.name}
                {/* <Link to='/add-meal'><button>Edit</button></Link> */}
            </div>
        )
    })
    
    return(
    <div>
        <Link to='/add-meal'><button>Add A Meal</button></Link>
        <h1>{meals}</h1>
    </div>
    )
}

export default MealsList