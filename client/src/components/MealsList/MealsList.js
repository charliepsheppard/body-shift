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
                <div key={key} className='individual-item'>
                    <Link 
                        id={meal.id}
                        to={{pathname: `/meals/${meal.id}`, state: meal}}
                        onClick={this.props.selectMeal}
                        className='individual-item-link'>
                        <h1 className='name'>{meal.name}</h1>
                        <p className='ingredients'>{meal.ingredients}</p>
                    </Link>
                </div>
            )
        })
        return(
            <div className='item-list'>
                <img src='https://i.imgur.com/iqHthZj.jpg?1' className='list-banner' />
                {/* <img src='https://i.imgur.com/iqHthZj.jpg' className='list-banner' /> */}
                <Link to='/add-meal'><button className='add-button'>Add A Meal</button></Link>
                {meals}
            </div>
        ) 
    }

    

    
    
    
}

export default MealsList