import React from 'react'
import TutorsContext from '../TutorsContext'
import Tutor from '../Tutor/Tutor'
import Filters from '../Filters/Filters'
import Nav from '../Nav/Nav'
import './MainPage.css'
import PropTypes from 'prop-types';

export default class MainPage extends React.Component {
    static defaultProps = {
        tutors: []
    };

    static contextType = TutorsContext;

    render() {
        const { tutors } = this.context
        return (
            <>
                <Nav />
                <div>
                    <section className="filter-section">
                        {<Filters />}
                    </section>

                    <section>
                        <ul className="tutors-list">
                            {tutors.map(tutor =>
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