import React from 'react'
import TutorsContext from '../../contexts/TutorsContext';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './TutorLink.css'

export default class TutorLink extends React.Component {
    static defaultProps = {
        tutors: []
    };

    render() {
        
        return (
            <TutorsContext.Consumer >
                {(context) => (
                  //  <Link className="tutor" to={`/tutors-page/${this.props.user_id}`}>
                        <li className="tutor">
                            <p className="tutors-item tutor-name">{this.props.first_name}</p>
                            <p className="tutors-item tutor-subject">{this.props.subjects[0]}</p>
                            <p className="tutors-item tutor-price">{this.props.fee}</p>
                        </li>
                   // </Link>
                )}
            </TutorsContext.Consumer>

        )
    }
}