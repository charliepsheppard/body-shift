import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './MealsList.css'
import axios from 'axios'

class MealsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: []
        }
    }

    getMealsData = async () => {
        try {
          const resp = await axios.get('/meals')
          const {meals} = resp.data
          this.setState({meals})
        }catch(e) {
          console.log(e.message)
        }
    }

    componentDidMount() {
        this.getMealsData()
     
    }

    render() {
        // console.log(this.state.meals)
        const meals = this.state.meals.map((meal, key) => {
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
            <div className='meal-list'>
                <Link to='/add-meal'><button className='add-button'>Add A Meal</button></Link>
                <h1>{meals}</h1>
            </div>
        ) 
    }

    

    
    
    
}

export default MealsList