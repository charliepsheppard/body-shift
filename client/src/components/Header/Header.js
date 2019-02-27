import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/meals'>Meals</Link>
                <Link to='/workouts'>Workouts</Link>
            </nav>
        </header>
    )
}

export default Header