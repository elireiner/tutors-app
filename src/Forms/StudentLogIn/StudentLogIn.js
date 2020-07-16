import React from 'react'

import './StudentLogIn.css'


export default class StudentLogIn extends React.Component {

    render() {

        return (
            <>
                <section class="welcome">
                    <p>Welcome Back</p>
                </section>
                <section class="log-in">
                    <form action="" method="post" class="form">
                        <div class="form-field">
                            <label for="email">Email
                                <input type="email" name="student_email" id="email" required></input>
                            </label>

                        </div>
                        <div class="form-field">
                            <label forHtml="password">Password
                                <input type="password" minlength="8" name="student_password" id="password" required />
                            </label>

                        </div>

                        <div class="form-field">
                            <input type="submit" value="Log in" />
                        </div>
                    </form>
                </section>
            </>
        )
    }
}