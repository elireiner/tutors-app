import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component {

    render() {

        return (
            <nav className="navbar">
                <p>Tutors App</p>
                <Link className="tutor" to='/tutors/add-service'>Tutor</Link>
                {
                    // <Link to='/students/signup'>Sign Up</Link>
                }
            </nav>
        )
    }
}