import React from 'react'

import './TutorSignUp.css'


export default class TutorSignUp extends React.Component {

    render() {

        return (
            <>
                <section className="welcome">
                    <p>Welcome</p>
                </section>
                <section className="sign-up">
                    <form action="" method="post" className="form">
                        <div className="form-field">
                            <label htmlFor="firstName">First name
                                <input type="text" name="studentFirstName" id="firstName" required />
                            </label>

                        </div>
                        <div className="formField">
                            <label htmlFor="lastName">Last name
                                      <input type="text" name="studentLastName" id="last-name" required />
                            </label>

                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email
                                      <input type="email" name="student_email" id="email" required />
                            </label>

                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Password
                                <input type="password" minLength="8" name="student_password" id="password" autoComplete="on" required />
                            </label>

                        </div>
                        <div className="form-field">
                            <label htmlFor="gender-select">
                                <select name="student_gender" id="gender-select">
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </label>

                        </div>
                        <div className="form-field">
                            <input type="submit" value="Sign up" />
                        </div>
                    </form>
                </section>
            </>
        )
    }
}