import React from 'react'
import FormNav from '../../FormNav/FormNav'
import './TutorAddService.css'

export default class TutorAddService extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            nextClicked: false
        };
        //   this.handleNextClick = this.delta.handleNextClick(this);
    }

    handleNextClick = () => {
        this.setState({
            nextClicked: true
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

                    <form action="" method="post" className="tutor-sign-up-form">
                        {
                            this.state.nextClicked ?

                                <div></div>
                                :
                                <>
                                    <label className="tutor-add-label" htmlFor="firstName">First name</label>
                                    <input className="tutor-add-input" type="text" name="tutorFirstName" id="firstName" required />

                                    <label className="tutor-add-label" htmlFor="lastName">Last name</label>
                                    <input className="tutor-add-input" type="text" name="tutorLastName" id="last-name" required />

                                    <label className="tutor-add-label" htmlFor="email">Email</label>
                                    <input className="tutor-add-input" type="email" name="tutor_email" id="email" required />

                                    <label className="tutor-add-label" htmlFor="password">Password</label>
                                    <input className="tutor-add-input" type="password" minLength="8" name="tutor_password" id="password" autoComplete="on" required />

                                    <button
                                        className="tutor-add-next-button"
                                        type="submit"
                                        onClick={this.handleNextClick}
                                    >
                                        Next
                                    </button>

                                </>}

                        {
                            this.state.nextClicked ?
                                <>
                                    <label className="tutor-add-label subject" htmlFor="subject">Subject</label>
                                    <input className="tutor-add-input subject" type="text" minLength="8" name="tutor_subject" id="subject" required />

                                    <label className="tutor-add-label fee" htmlFor="fee">Fee</label>
                                    <input className="tutor-add-input fee" type="number" min="1" step="any" name="tutor_fee" id="fee" required />

                                    <label className="tutor-add-label gender-label" htmlFor="gender-select"></label>
                                    <select className="tutor-add-gender" name="tutor_gender" id="gender-select">
                                        <option value="">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>

                                    <div className="medium">

                                        <input type="radio" id="online" name="online" value="online" />
                                        <label for="online">online</label>

                                        <input type="radio" id="person" name="person" value="person" />
                                        <label for="person">In person</label>

                                    </div>


                                    <input className="tutor-add-input tutor-add-input-sign-up-button" type="submit" value="Sign up" />
                                </>
                                :

                                <div></div>

                        }
                    </form>
                </section>
            </>
        )
    }
}