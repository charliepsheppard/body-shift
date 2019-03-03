import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UpdateForm from '../UpdateForm/UpdateForm'

class SingleWorkout extends Component {
    constructor(props) {
        super(props)
    }

    // renderEditForm = () => {
    //     return (
    //         <UpdateForm />
    //     )
    // }


    render() {

        console.log(this.props.location.activity)
        return(
            <div>
                <div>
                <h1>{this.props.location.state.activity}</h1>
                <p>{this.props.location.state.description}</p>
                <p>{this.props.location.state.duration}</p>
                </div>
                {/* <Link to={`/workouts/${this.props.selectWorkout.id}`}> */}
                    {/* <button onClick={() => {this.props.workoutId(this.props.selectedWorkout)}}>Edit</button> */}
                    {/* <button onClick={() => {this.renderEditForm()}}>Edit</button> */}
                    
                {/* </Link> */}
                <div>
                    <UpdateForm workoutToUpdate={this.props.location.state} />
                </div>
            </div>
        )    
    }
    
}

export default SingleWorkout