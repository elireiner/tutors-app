import React from 'react'
import { Link } from 'react-router-dom'
import './Filters.css'

export default class Filters extends React.Component {

    render() {

        return (
            <div className="filter-element">
                <h2 className="filters-header">Filters</h2>
                <div className="filters">
                    <label>
                        <select name="tutor_gender" id="gender-select">
                            <option value="">Location</option>
                            <option value="Male">Brooklyn</option>
                            <option value="Female">Queens</option>
                        </select>
                    </label>

                    <label>
                        <select name="tutor_gender" id="gender-select">
                            <option value="">Medium</option>
                            <option value="Male">Online</option>
                            <option value="Female">In person</option>
                        </select>
                    </label>

                    <form action="" method="post" className="form">
                        <label>
                            <select name="tutor_price" id="price-select">
                                <option value="">Fee</option>
                                <option value="25">{"<"} $25</option>
                                <option value="50">{"<"} $50</option>
                            </select>
                        </label>

                    </form>
                </div>
            </div>
        )
    }
}