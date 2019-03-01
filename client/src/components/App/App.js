import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Home from '../Home/Home'
import MealsList from '../MealsList/MealsList'
import WorkoutsList from '../WorkoutsList/WorkoutsList'
import MealForm from '../MealForm/MealForm'
import WorkoutForm from '../WorkoutForm/WorkoutForm'
import SingleMeal from '../SingleMeal/SingleMeal'
import SingleWorkout from '../SingleWorkout/SingleWorkout'


class App extends Component {
  constructor() {
    super()
    this.state = {
      meals: [],
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

  selectMeal = async (e) => {
    try {
        const resp = await axios.get(`/meals/${e.target.id}`)
        const {meal} = resp.data
        this.setState({
            selectedMeal: meal
        }) 
    }catch(e) {
        console.log(e.message)
    } 
  }

  selectWorkout = async (e) => {
    try {
      const resp = await axios.get(`/workouts/${e.target.id}`)
      const {workout} = resp.data
      this.setState({
        selectedWorkout: workout
      })
    }catch(e) {
      console.log(e.message)
    }
  }

  componentDidMount() {
    this.getMealsData()
    this.getWorkoutData()
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
            exact path='/meals'
            render={() => (<MealsList 
              meals={this.state.meals} 
              getMeals={this.getMealsData} 
              selectMeal={this.selectMeal}
            />)}
          />
          <Route 
            exact path='/workouts'
            render={() => (<WorkoutsList 
              workouts={this.state.workouts} 
              getWorkouts={this.getWorkoutData} 
              selectWorkout={this.selectWorkout}
            />)}
          />
          <Route 
            path='/add-meal'
            component={MealForm}
          />
          <Route 
            path='/add-workout'
            component={WorkoutForm}
          />
          <Route 
            path='/meals/:id'
            render={(props) => (
            <SingleMeal {...props} 
              selectMeal={this.state.selectedMeal}
            />)}
          />
          <Route 
            path='/workouts/:id'
            render={(props) => (
            <SingleWorkout {...props}
              selectWorkout={this.state.selectedWorkout}
            />)}
          />
        </Switch>  
      </div>
    );
  }
}

export default App;
