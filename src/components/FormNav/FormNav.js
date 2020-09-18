import React from 'react'
import { Link } from 'react-router-dom'
import './FormNav.css'

export default class FormNav extends React.Component {

    render() {

        return (
            <nav className="navbar">
                <section className="nav-text">
                <Link className="home" to='/'>Home</Link>
                </section>
            </nav >
        )
    }
}