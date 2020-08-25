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
                        <select name="medium" id="medium-select" onChange={this.props.handleSelectChange}>
                            <option value="all">Medium</option>
                            <option value="online">Online</option>
                            <option value="person">In person</option>
                        </select>
                    </label>

                    <label>
                        <select name="gender" id="gender-select" onChange={this.props.handleGenderChange}>
                            <option value="all">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>

                    <form action="" method="post" className="form">
                        <label>
                            <select name="tutor_price" id="price-select" onChange={this.props.handlePriceChange}>
                                <option value="all">Fee</option>
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