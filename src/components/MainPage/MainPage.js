import React from 'react'
import TutorsContext from '../../contexts/TutorsContext'
import TutorLink from '../TutorLink/TutorLink'
import Filters from '../Filters/Filters'
import Nav from '../Nav/Nav'
import './MainPage.css'
import PropTypes from 'prop-types';

export default class MainPage extends React.Component {
    //fix organize default props and constructor

    handleSelectChange = (e) => {
        this.props.setFilters(e)
    }

    handleSearch = (text) => {
       this.props.onFilterTextChange(text);
    }

    render() {
      
        return (
            <>
                <Nav />
                <div className="beta">
                    <span>Beta; please bear with us</span>
                </div>
                <div>

                    <section className="filter-section">
                        {<Filters
                            handleSearch={this.handleSearch}
                            searchText={this.props.searchText}
                            handleSelectChange={this.handleSelectChange}
                        />}
                    </section>

                    <section>

                        <ul className="tutors-list">
                            {this.props.currentTutors.map(tutor =>
                                <TutorLink
                                    key={tutor.id}
                                    {...tutor}
                                />
                            )}
                        </ul>
                    </section>
                </div>


            </>
        )
    }
}