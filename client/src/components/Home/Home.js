import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return(
        <div className='home'>
            <div className='welcome-text'>
                <p>Welcome to BodyShift, your personal health tracker.
                <br /> Our purpose is to make a simple way for you to keep track of your health endevours. Add meals and workouts to not only keep track as you move forward in your goals, but to return to when you might need some ispiration of what you did before.
                <br /> 
                Enjoy!
                </p>
            </div>
            <div className='link-buttons'>
                <Link to='/meals'><button className='welcome-button'>Meals</button></Link>
                <Link to='/workouts'><button className='welcome-button'>Workouts</button></Link>
            </div>
        </div>
    )
}

export default Home