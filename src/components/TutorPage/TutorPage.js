import React from 'react';


export default class TutorPage extends React.Component {
    state = {
        currentTutor: {
            tutorId: null,
            first_name: null,
            subjects: [],
            fee: null
        }

    }

    componentDidMount() {
        
        let tutorId = Number(this.props.match.params.tutorId)
        this.setState({
            currentTutor: {
                ...this.state.currentTutor,
                tutorId
            }

        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        //Since initially props.tutors isn't filled with tutors, check if props.tutors is already filled
        if (nextProps.tutors.length > 0) {

            //Get only the tutor that matches the route
            let currentTutor = nextProps.tutors.find(tutor => tutor.user_id === prevState.currentTutor.tutorId)

            //Check if the state needs to be updated 
            if (prevState.currentTutor !== nextProps.tutors) {
                return {
                    currentTutor
                }
            }
        }
    }


    render() {
        console.log(this.state.currentTutor)
        return (
            <li className="tutor">
                <p className="tutors-item tutor-name">{this.state.currentTutor.first_name}</p>
                <p className="tutors-item tutor-subject">{this.state.currentTutor.subjects}</p>
                <p className="tutors-item tutor-price">{this.state.currentTutor.fee}</p>
            </li>
        )
    }
}