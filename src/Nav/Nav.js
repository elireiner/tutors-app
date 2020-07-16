import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component {

    render() {

        return (
            <>
        <Link to='/students/signup'>Sign Up</Link>
        <Link to='/tutors/signup'>Tutors</Link>
            </>
        )
    }
}