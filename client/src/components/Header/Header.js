import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return(
        <header className="header">
            <nav className="nav">
                <Link to='/home' className="link">BodyShift</Link>
                <Link to='/meals' className="link">Meals</Link>
                <Link to='/workouts' className="link">Workouts</Link>
            </nav>
        </header>
    )
}

export default Header