import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './WorkoutsList.css'
import axios from 'axios'

class WorkoutsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workouts: []
        }
    }

    getWorkoutData = async () => {
        try {
          const resp = await axios.get('/workouts')
          const {workouts} = resp.data
          this.setState({workouts})
        }catch(e) {
          console.log(e.message)
        }
      }

    componentDidMount() {
    this.getWorkoutData()
     
    }

    render() {
        const workouts = this.state.workouts.map((workout, key) => {
            return(
                <div key={key} className='individual-item'>
                    <Link 
                        id={workout.id}
                        to={{pathname: `/workouts/${workout.id}`, state: workout}}
                        onClick={this.props.selectWorkout}
                        className='individual-item-link'>
                        <h1 className='activity'>{workout.activity}</h1>
                        <p className='description'>{workout.description}</p>
                    </Link>
                </div>
            )
        })
        return(
                <div className='item-list'>
                    <img src='https://i.imgur.com/4U1yUUV.jpg?1' className='list-banner' />
                    <Link to='/add-workout'><button className='add-button'>Add A Workout</button></Link>
                    {workouts}
                </div>
            )
    }
    
    
}

export default WorkoutsList