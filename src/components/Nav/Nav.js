import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component {

    render() {

        return (
            <nav className="navbar">
                <section className="nav-text">
                    <p>Tutors App</p>
                    <Link className="tutor" to='/tutors/add-service'>Teach with us</Link>
                </section>

            </nav>
        )
    }
}