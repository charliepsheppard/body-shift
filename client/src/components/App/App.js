import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Home from '../Home/Home'
import MealsList from '../MealsList/MealsList'
import WorkoutsList from '../WorkoutsList/WorkoutsList'
import AddMeal from '../AddMeal/AddMeal'
import AddWorkout from '../AddWorkout/AddWorkout'
import SingleMeal from '../SingleMeal/SingleMeal'
import SingleWorkout from '../SingleWorkout/SingleWorkout'


class App extends Component {
  constructor() {
    super()
    this.state = {
      mealId: '',
      meals: [],
      workoutId: '',
      workouts: [],
      selectedMeal: '',
      selectedWorkout: ''
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
            render={() => (<MealsList meals={this.state.meals} getMeals={this.getMealsData} />)}
          />
          <Route 
            path='/workouts'
            render={() => (<WorkoutsList workouts={this.state.workouts} getWorkouts={this.getWorkoutData} />)}
          />
          <Route 
            path='/add-meal'
            component={AddMeal}
          />
          <Route 
            path='/add-workout'
            component={AddWorkout}
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
