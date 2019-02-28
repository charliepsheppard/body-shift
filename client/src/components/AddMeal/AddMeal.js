import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class AddMeal extends Component {
    constructor() {
        super()
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

    handleSubmit = (e) => {
        e.preventDefault()
        this.addMeal()
        this.setState({
            submitted: true
        })
    }

    render() {
        const redirectToMeals = this.state.submitted
        if (redirectToMeals == true) {
            return <Redirect to='/meals' />
        }
        return(
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" />   
                <br />
                <input type="text" name="ingredients" placeholder="Ingredients" />
                <br />
                <input type="number" name="prep" placeholder="Prep Time" />
                <br />
                <input type="number" name="cooktime" placeholder="Cook Time" />
                <br />
                <input type="number" name="calories" placeholder="Calories" />
                <br />
                <input type="submit" value="submit" />
            </form>
        )  
    }
    
}

export default AddMeal