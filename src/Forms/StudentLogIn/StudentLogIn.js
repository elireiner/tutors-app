import React from 'react'

import './StudentLogIn.css'


export default class StudentLogIn extends React.Component {

    render() {

        return (
            <>
                <section className="welcome">
                    <p>Welcome Back</p>
                </section>
                <section className="log-in">
                    <form action="" method="post" className="form">
                        <div className="form-field">
                            <label htmlFor="email">Email
                                <input type="email" name="student_email" id="email" required></input>
                            </label>

                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Password
                                <input type="password" minLength="8" name="student_password" id="password" autoComplete="on" required />
                            </label>

                        </div>

                        <div className="form-field">
                            <input type="submit" value="Log in" />
                        </div>
                    </form>
                </section>
            </>
        )
    }
}