import React from 'react'
import './Tutor.css'

export default class Tutor extends React.Component {
    render() {
        const { name, price, subject } = this.props
        return (
            <li className="tutor">
                <p>{name}</p>
                <p>{price}</p>
                <p>{subject}</p>
            </li>
        )
    }
}