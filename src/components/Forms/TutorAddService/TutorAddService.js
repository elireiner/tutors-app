import React from 'react'
import FormNav from '../../FormNav/FormNav'
import config from '../../../config'
import TutorsContext from '../../../contexts/TutorsContext'
import './TutorAddService.css'

export default class TutorAddService extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            userPassword: '',
            gender: '',
            student: false,
            tutor: true,
            fee: 0,
            onlineMedium: true,
            inPerson: false,
            subjects: null,

            first: true,
            second: false,
            lastMessage: 'Submitting...',
            submitted: false,
            error: false
        };
    }

    static contextType = TutorsContext;

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    handleFormChange = async (event) => {
        const target = event.target;

        if (target.name === "onlineMedium" || target.name === "inPerson") {
            if (event.target.checked && !this.state[target.name]) {
                this.setState({
                    [target.name]: true,
                })
            }
            else if (event.target.checked && this.state[target.name]) {
                this.setState({
                    [target.name]: false,
                })
            }

        }

        else {
            const value = target.value;
            const name = target.name;

            if (name === "tutorSubjects") {
                //let subjects = this.state.subjects.concat(value);

                let subjects = []
                subjects.push(value)
                this.setState({
                    subjects
                })
            }

            await this.setStateAsync({
                [name]: value
            })
        }
    }

    handleNextClick = () => {
        this.setState({
            first: false,
            second: true
        })
    }

    handleSubmit = e => {

        this.setState({
            second: false,
            submitted: true,
        })

        e.preventDefault()
        const user = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            user_password: this.state.userPassword,
            gender: this.state.gender,
            student: this.state.student,
            tutor: this.state.tutor,
            fee: this.state.fee,
            in_person: this.state.inPerson,
            online_medium: this.state.onlineMedium,
            subjects: this.state.subjects
        }
        console.log(user)

        fetch(config.API_ENDPOINT, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(user => {
                this.setState({
                    lastMessage: "Success!"
                })

                console.log(user)
                
                this.context.addUser(user)
            })
            .catch(error => {
                let message = error.message
                if (typeof message === "undefined") {
                    message = "There was an unknown error."
                }
                else if (message.split(" ").includes("duplicate")) {
                    message = "This account exist already"
                } else {
                    message = `There was an error ${error.message}`
                }

                this.setState({
                    lastMessage: message
                })
            })
            .finally((res) => {
                //* move user back to main page
                //* setStates to false  except first after user left page
                //* either automatically or by clicking on the home link

                //
            })
    }


    render() {

        return (
            <>
                <FormNav />

                {
                    //<section className="welcome">
                    //   <p>Welcome</p>
                    // </section>
                    //<div className="toggle">
                    // <p className="current-form">signup</p>
                    // {'/'}
                    // <Link className="link" to='/tutors/login'>login</Link>
                    // </div>
                }
                <section className="tutor-sign-up-section">

                    <form
                        action=""
                        method="post"
                        className="tutor-sign-up-form"
                        onSubmit={this.handleSubmit}
                    >

                        {
                            this.state.first ?

                                <>
                                    <label className="tutor-add-label" htmlFor="firstName">
                                        First name
                                        <input
                                            className="tutor-add-input"
                                            type="text"
                                            name="firstName"
                                            value={this.state.firstName}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>

                                    <label className="tutor-add-label">
                                        Last name
                                        <input
                                            className="tutor-add-input"
                                            type="text"
                                            name="lastName"
                                            required
                                            value={this.state.lastName}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>

                                    <label className="tutor-add-label" htmlFor="email">
                                        Email
                                           <input
                                            className="tutor-add-input"
                                            type="email"
                                            name="email"
                                            required
                                            value={this.state.email}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>

                                    <label className="tutor-add-label">
                                        Password
                                           <input
                                            className="tutor-add-input"
                                            type="password"
                                            minLength="8"
                                            name="userPassword"
                                            autoComplete="on"

                                            value={this.state.userPassword}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>


                                    <button
                                        className="tutor-add-next-button"
                                        type="submit"
                                        onClick={this.handleNextClick}
                                    >
                                        Next
                                    </button>
                                </>

                                :

                                <div></div>
                        }

                        {
                            this.state.second ?
                                <>
                                    <label className="tutor-add-label subject">
                                        Subject
                                        <input
                                            className="tutor-add-input subject"
                                            type="text"
                                            minLength="2"
                                            name="tutorSubjects"
                                            required
                                            value={this.state.tutorSubjects}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>


                                    <label className="tutor-add-label fee">
                                        Fee
                                        <input
                                            className="tutor-add-input fee"
                                            type="number"
                                            min="1"
                                            step="any"
                                            name="fee"
                                            required
                                            value={this.state.fee}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>

                                    <label className="tutor-add-label gender-label">
                                        <select
                                            className="tutor-add-gender"
                                            name="gender"
                                            value={this.state.value}
                                            onChange={this.handleFormChange}
                                        >
                                            <option value="gender">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </label>



                                    <div className="medium">
                                        <input
                                            type="radio"
                                            id="online"
                                            name="onlineMedium"
                                            value="click"
                                            checked={this.state.onlineMedium}
                                            onClick={this.handleFormChange}
                                        />
                                        <label htmlFor="online">online</label>

                                        <input
                                            type="radio"
                                            id="person"
                                            name="inPerson"
                                            value="click"
                                            checked={this.state.inPerson}
                                            onClick={this.handleFormChange}
                                        />
                                        <label htmlFor="person">In person</label>

                                    </div>



                                    <input className="tutor-add-input tutor-add-input-sign-up-button" type="submit" value="Sign up" />
                                </>

                                :

                                <div></div>


                        }


                        {
                            this.state.submitted ?
                                <div className="lastDiv">
                                    <p className="lastMessage">{this.state.lastMessage}</p>
                                </div>



                                :
                                <div></div>


                        }
                        {

                            this.state.showStudentChoice ?

                                <div className="role">

                                    <input
                                        type="radio"
                                        id="tutor"
                                        name="tutor"
                                        value="tutor"

                                    //checked={this.state.value === option.value}
                                    //onChange={this.handleChange}}

                                    />
                                    <label
                                        htmlFor="tutor"
                                    >
                                        A tutor
                                    </label>

                                    <input
                                        type="radio"
                                        id="student"
                                        name="student"
                                        value="student"

                                    //checked={this.state.value === option.value}
                                    // onChange={this.handleChange}}

                                    />
                                    <label
                                        htmlFor="student"
                                    >
                                        Also a student
                                    </label>

                                </div>
                                :
                                <div></div>
                        }
                    </form>
                </section>
            </>
        )
    }
}