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
        if (this.state.editClicked == false) {
            return(
                <div>
                    <h1>{this.props.location.state.name}</h1>
                    <p>{this.props.location.state.ingredients}</p>
                    <p>{this.props.location.state.prep}</p>
                    <p>{this.props.location.state.cooktime}</p>
                    <p>{this.props.location.state.calories}</p>
                    <button onClick={this.renderForm}>Edit</button>
                </div>    
            )    
        } else if (this.state.editClicked == true) {
            return(
                <div>
                    <div>
                        <UpdateMealForm mealToUpdate={this.props.location.state} />
                    </div>
                </div>
            )    
        }
           
    } 
}

export default SingleMeal