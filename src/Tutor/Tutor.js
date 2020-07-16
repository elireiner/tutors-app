import React from 'react'
import { Link } from 'react-router-dom'
import './Tutor.css'

export default class Tutor extends React.Component {
    render() {
        const { name, price, subject } = this.props
        return (
            <>
                <p>{name}</p>
                <p>{price}</p>
                <p>{subject}</p>
            </>
        )
    }
}