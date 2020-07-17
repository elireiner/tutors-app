import React from 'react'
import { Link } from 'react-router-dom'
import './FormNav.css'

export default class FormNav extends React.Component {

    render() {

        return (
            <>
        <Link to='/'>Home</Link>
        <Link to='/tutors/login'>Tutors</Link>
  
            </>
        )
    }
}