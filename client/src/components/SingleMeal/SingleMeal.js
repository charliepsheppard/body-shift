import React, {Component} from 'react'
import UpdateMealForm from '../UpdateMealForm/UpdateMealForm'

class SingleMeal extends Component {
    constructor(props) {
        super(props)
    } 
    render() {
        console.log(this.props.location.state.name)
        return(
            <div>
                <div>
                <h1>{this.props.location.state.name}</h1>
                <p>{this.props.location.state.ingredients}</p>
                <p>{this.props.location.state.prep}</p>
                <p>{this.props.location.state.cooktime}</p>
                <p>{this.props.location.state.calories}</p>
                </div>
                <div>
                <UpdateMealForm mealToUpdate={this.props.location.state} />
                </div>
            </div>
        )    
    } 
}

export default SingleMeal