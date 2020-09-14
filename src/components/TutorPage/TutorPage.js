import React from 'react';
import FormNav from '../FormNav/FormNav'


export default class TutorPage extends React.Component {

    render() {

        if (!this.props.tutors) {
            return null
        }

        const currentTutor = this.props.tutors.find(tutor => tutor.user_id === Number(this.props.match.params.tutorId))
        const numberOfSubjects = currentTutor.subjects.length < 2

        return (
            <>
                < FormNav />
                <h1>Welcome to my page!</h1>
                <div className="tutor">
                    <p className="tutors-item tutor-name">My name is {currentTutor.first_name}</p>
                    {numberOfSubjects
                        ? <p className="tutors-item tutor-subject">I tutor {currentTutor.subjects}</p>
                        :
                        <>
                            <p className="tutors-item tutor-subject">I tutor the following subjects:</p>

                            <ul>
                                {currentTutor.subjects.map(subject => <li>{subject}</li>)}
                            </ul>
                        </>
                    }
                    <p className="tutors-item tutor-price">My fee is {currentTutor.fee} dollars</p>
                </div>
            </>
        )
    }
}