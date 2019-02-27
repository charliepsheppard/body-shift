import React, {Component} from 'react'

const MealsList = (props) => {
    const meals = props.meals.map((meal, key) => {
        return (
            <div key={key}>
                <h4 key={meal.id}>{meal.name}</h4>
            </div>
        )
    })
    
    return(
    <div>
        <h1>{meals}</h1>
    </div>
    )
}

export default MealsList