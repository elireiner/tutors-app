import React from 'react'
import TutorsContext from '../../contexts/TutorsContext'
import Tutor from '../Tutor/Tutor'
import Filters from '../Filters/Filters'
import Nav from '../Nav/Nav'
import './MainPage.css'
import PropTypes from 'prop-types';

export default class MainPage extends React.Component {
    //fix organize default props and constructor

    handleSelectChange = (e) => {
        this.props.setFilters(e)
    }

    render() {

        const props = {
            handleSelectChange: this.handleSelectChange,
        }

        return (
            <>
                <Nav />
                <div className="beta">
                    <span>Beta; please bear with us</span>
                </div>
                <div>

                    <section className="filter-section">
                        {<Filters
                            {...props}
                        />}
                    </section>

                    <section>

                        <ul className="tutors-list">
                            {this.props.currentTutors.map(tutor =>
                                <Tutor
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