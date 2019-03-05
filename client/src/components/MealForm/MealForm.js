import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './MealForm.css'
import axios from 'axios'

class MealForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            ingredients: '',
            prep: 0,
            cooktime: 0,
            calories: 0,
            submitted: false
        }
    }

    addMeal = async () => {
        await axios.post('/meals', this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        await this.addMeal()
        this.setState({
            submitted: true
        })
    }

    render() {
        const redirectToMeals = this.state.submitted
        if (redirectToMeals === true) {
            return <Redirect to='/meals' /> 
        }
        return(
            <div className='form'>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" className='form-input' />   
                    <br />
                    <input type="text" name="ingredients" placeholder="Ingredients" className='form-input' />
                    <br />
                    <input type="number" name="prep" placeholder="Prep Time" className='form-input' />
                    <br />
                    <input type="number" name="cooktime" placeholder="Cook Time" className='form-input' />
                    <br />
                    <input type="number" name="calories" placeholder="Calories" className='form-input' />
                    <br />
                    <input type="submit" value="Add Meal" className='form-button' />
                </form>
            </div>
        )  
    }
    
}

export default MealForm