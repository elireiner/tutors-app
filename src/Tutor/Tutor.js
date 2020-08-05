import React from 'react'
import './Tutor.css'

export default class Tutor extends React.Component {
    render() {
        const { name, price, subject } = this.props
        return (
            <li className="tutor">
                <p className="tutors-item tutor-name">{name}</p>
                <p className="tutors-item tutor-subject">{subject}</p>
                <p className="tutors-item tutor-price">{price}</p>
            </li>
        )
    }
}