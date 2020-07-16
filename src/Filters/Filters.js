import React from 'react'
import { Link } from 'react-router-dom'
import './Filters.css'

export default class Filters extends React.Component {

    render() {

        return (
            <div>
                <label>
                    <select name="student_gender" id="gender-select">
                        <option value="">Location</option>
                        <option value="Male">Brooklyn</option>
                        <option value="Female">Queens</option>
                    </select>
                </label>

                <label>
                    <select name="student_gender" id="gender-select">
                        <option value="">Medium</option>
                        <option value="Male">Online</option>
                        <option value="Female">In person</option>
                    </select>
                </label>

                <form action="" method="post" className="form">
                    <label>Price
                    <input type="number" name="student_email" min="1" id="price" required />
                    </label>

                </form>
            </div>

        )
    }
}