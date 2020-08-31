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
                            <select name="gender" id="gender-select" onChange={this.props.handleSelectChange}>
                                <option value="all">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </label>

                        <label>
                            <select name="fee" id="price-select" onChange={this.props.handleSelectChange}>
                                <option value="all">Fee</option>
                                <option value="25">{"<"} $25</option>
                                <option value="50">{"<"} $50</option>
                            </select>
                        </label>
                </div>
            </div>
        )
    }
}