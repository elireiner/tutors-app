import React from 'react'
import TutorsContext from '../TutorsContext'
import Tutor from '../Tutor/Tutor'
import Filters from '../Filters/Filters'
import Nav from '../Nav/Nav'
import './MainPage.css'
import PropTypes from 'prop-types';

export default class MainPage extends React.Component {
    //fix organize default props and constructor

    constructor(props) {
        super(props)

        this.state = {
            tutors: this.props.tutors,
            fee: "all",
            medium: "all",
            gender: "all"
        };
    }

    handleGenderChange = (e) => {
        this.setState({ gender: e.target.value });
    }

    handleMediumChange = (e) => {

    }

    handlePriceChange = (e) => {

    }


    render() {

        console.log(this.props.tutors)
        const props = {
            handleGenderChange: this.handleGenderChange,
            handleMediumChange: this.handleMediumChange,
            handlePriceChange: this.handlePriceChange
        }

        return (
            <>
                <Nav />
                <div>
                    <section className="filter-section">
                        {<Filters
                            {...props}
                        />}
                    </section>

                    <section>
                        <ul className="tutors-list">
                            {this.state.tutors.map(tutor =>
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