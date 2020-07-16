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
                    <form action="" method="post" class="form">
                        <div class="form-field">
                            <label forHtml="firstName">First name
                                <input type="text" name="studentFirstName" id="firstName" required />
                            </label>

                        </div>
                        <div class="formField">
                            <label for="lastName">Last name
                                      <input type="text" name="studentLastName" id="last-name" required />
                            </label>

                        </div>
                        <div class="form-field">
                            <label for="email">Email
                                      <input type="email" name="student_email" id="email" required />
                            </label>

                        </div>
                        <div class="form-field">
                            <label for="password">Password
                                <input type="password" minlength="8" name="student_password" id="password" required />
                            </label>

                        </div>
                        <div class="form-field">
                            <label for="gender-select">
                                <select name="student_gender" id="gender-select">
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </label>

                        </div>
                        <div class="form-field">
                            <input type="submit" value="Sign up" />
                        </div>
                    </form>
                </section>
            </>
        )
    }
}