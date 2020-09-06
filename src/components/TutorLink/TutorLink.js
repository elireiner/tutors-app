import React from 'react'
import TutorsContext from '../../contexts/TutorsContext';
import PropTypes from 'prop-types';
import './TutorLink.css'

export default class Tutor extends React.Component {
    static defaultProps = {
        tutors: []
    };

    render() {

        return (
            <TutorsContext.Consumer >
                {(context) => (
                <li className="tutor">
                    <p className="tutors-item tutor-name">{this.props.first_name}</p>
                    <p className="tutors-item tutor-subject">{this.props.subjects[0]}</p>
                    <p className="tutors-item tutor-price">{this.props.fee}</p>
                </li>
                )}
            </TutorsContext.Consumer>

        )
    }
}