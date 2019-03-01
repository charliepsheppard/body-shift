import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class MealsList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const meals = this.props.meals.map((meal, key) => {
            return (
                <div key={key}>
                    <Link 
                        id={meal.id}
                        to={{pathname: `/meals/${meal.id}`, state: meal}}
                        onClick={this.props.selectMeal}>
                    {meal.name}
                    </Link>
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

    

    
    
    
}

export default MealsList