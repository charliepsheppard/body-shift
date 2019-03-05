import React, {Component} from 'react'
import UpdateMealForm from '../UpdateMealForm/UpdateMealForm'

class SingleMeal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editClicked: false
        }
    }

    renderForm = () => {
        this.setState({
            editClicked:true
        })
    }
    
    render() {
        console.log(this.props.location.state.name)
        if (this.state.editClicked === false) {
            return(
                <div className='single-page'>
                    <h1 className='single-page-item'>{this.props.location.state.name}</h1>
                    <p className='single-page-label'>Ingredients:</p>
                    <p className='single-page-item'>{this.props.location.state.ingredients}</p>
                    <p className='single-page-label'>Prep Time:</p>
                    <p className='single-page-item'>{this.props.location.state.prep}</p>
                    <p className='single-page-label'>Cook Time:</p>
                    <p className='single-page-item'>{this.props.location.state.cooktime}</p>
                    <p className='single-page-label'>Calories:</p>
                    <p className='single-page-item'>{this.props.location.state.calories}</p>
                    <button onClick={this.renderForm} className='edit-button'>Edit</button>
                </div>    
            )    
        } else if (this.state.editClicked === true) {
            return(
                <div className='single-page'>
                    <div>
                        <UpdateMealForm mealToUpdate={this.props.location.state} />
                    </div>
                </div>
            )    
        }
           
    } 
}

export default SingleMeal