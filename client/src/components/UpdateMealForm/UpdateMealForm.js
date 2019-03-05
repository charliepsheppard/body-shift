import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class UpdateMealForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.mealToUpdate.name,
            ingredients: this.props.mealToUpdate.ingredients,
            prep: this.props.mealToUpdate.prep,
            cooktime: this.props.mealToUpdate.cooktime,
            calories: this.props.mealToUpdate.calories,
            submitted: false,
            deleted: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    handleEditMealSubmit = async (e) => {
        e.preventDefault()
        let updatedMeal = {
            name: this.state.name,
            ingredients: this.state.ingredients,
            prep: this.state.prep,
            cooktime: this.state.cooktime,
            calories: this.state.calories
        }
        let editId = this.props.mealToUpdate.id
        await axios.put(`/meals/${editId}`, updatedMeal)
        // this.updateWorkout()
        this.setState({
            name: updatedMeal.name,
            ingredients: updatedMeal.ingredients,
            prep: updatedMeal.prep,
            cooktime: updatedMeal.cooktime,
            calories: updatedMeal.calories,
            submitted: true
        })
    }

    deleteMeal = async () => {
        let deleteId = this.props.mealToUpdate.id
        await axios.delete(`/meals/${deleteId}`)
        this.setState({
            deleted: true
        })
    }

    render() {
        const redirectToMeals = this.state.submitted
        const redirectAfterDelete = this.state.deleted
        if (redirectToMeals || redirectAfterDelete === true) {
            return <Redirect to='/meals' />    
        }
        return(
            <div className='form'>
                <form onChange={this.handleChange} onSubmit={this.handleEditMealSubmit}>
                    <input type="text" defaultValue={this.state.name} name="name" placeholder="Name" className='form-input' />   
                    <br />
                    <input type="text" defaultValue={this.state.ingredients} name="ingredients" placeholder="Ingredients" className='form-input' />
                    <br />
                    <input type="number" defaultValue={this.state.prep} name="prep" placeholder="Prep Time" className='form-input' />
                    <br />
                    <input type="number" defaultValue={this.state.cooktime} name="cooktime" placeholder="Cook Time" className='form-input' />
                    <br />
                    <input type="number" defaultValue={this.state.calories} name="calories" placeholder="Calories" className='form-input' />
                    <br />
                    <input type="submit" value="Edit" className='form-button' />
                </form>
                <button onClick={this.deleteMeal} className='form-button'>Delete</button>
            </div>
        )
    }
}

export default UpdateMealForm