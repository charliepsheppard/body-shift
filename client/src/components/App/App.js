import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from '../Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      mealId: '',
      meals: [],
      workoutId: '',
      workouts: []
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
    this.getMealsData()
    this.getWorkoutData()
  }

  mealId = (mealId) => {
    this.setState({
      mealId
    })
  }

  workoutId = (workoutId) => {
    this.setState({
      workoutId
    })
  }

  // this.state.meals.map(meal => {
  //   return (
  //     <div>
  //       <h4 key={meal.id}>{meal.name}</h4>

  //     </div>
  //   )
  // })

  // this.state.workouts.map(workout => {
  //   return(
  //     <div>
  //       <h4 key={workout.id}>{workout.activity}</h4>
  //     </div>
  //   )
  // })

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact path='/'
            render={() => (<Login />)}
          />
          <Route 
            exact path='/home'
            render={() => (<Home />)}
          />
          <Route 
            path='/meals'
            render={() => (<MealsList />)}
          />
          <Route 
            path='/workouts'
            render={() => (<WorkoutsList />)}
          />
          <Route 
            path='/add-meal'
            component={addMeal}
          />
          <Route 
            path='/add-workout'
            component={addWorkout}
          />
          <Route 
            path='/meals/:id'
            render={() => (<SingleMeal />)}
          />
          <Route 
            path='/workouts/:id'
            render={() => (<SingleWorkout />)}
          />
        </Switch>  
      </div>
    );
  }
}

export default App;
