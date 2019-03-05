import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
                <div key={key}>
                    <Link 
                        id={workout.id}
                        to={{pathname: `/workouts/${workout.id}`, state: workout}}
                        onClick={this.props.selectWorkout}>
                        {workout.activity}
                    </Link>
                </div>
            )
        })
        return(
                <div>
                    <Link to='/add-workout'><button>Add A Workout</button></Link>
                    <h1>{workouts}</h1>
                </div>
            )
    }
    
    
}

export default WorkoutsList