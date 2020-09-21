import React from 'react';
import FormNav from '../FormNav/FormNav';
import './TutorPage.css';


export default class TutorPage extends React.Component {

    render() {

        if (!this.props.tutors) {
            return null
        }

        const currentTutor = this.props.tutors.find(tutor => tutor.user_id === Number(this.props.match.params.tutorId));
        const numberOfSubjects = currentTutor.subjects.length < 2;

        return (
            <>
                < FormNav />
                <h1 className="tutor-page-header">Welcome to my page!</h1>
                <div className="tutor-page-info">
                    <p className="tutors-page-item tutor-page-name">My name is {currentTutor.first_name}.</p>
                    {numberOfSubjects
                        ? <p className="tutors-page-item tutor-page-subject">I tutor {currentTutor.subjects}</p>
                        :
                        <>
                            <p className="tutors-page-item tutor-page-subjects">I tutor the following subjects:</p>

                            <ul>
                                {currentTutor.subjects.map((subject, index) => <li key={index} className="tutor-page-subject">{subject}</li>)}
                            </ul>
                        </>
                    }
                    <p className="tutors-page-item tutor-page-price">My fee is {currentTutor.fee} dollars per session.</p>
                    <p className="tutors-page-item tutor-page-email">Please <a href={`mailto:${currentTutor.email}`}>email</a> me.</p>
                </div>
            </>
        )
    }
}