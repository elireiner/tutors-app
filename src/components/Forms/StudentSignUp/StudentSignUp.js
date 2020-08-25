import React from 'react'
import FormNav from '../../FormNav/FormNav'
import { Link } from 'react-router-dom'
import './StudentSignUp.css'


export default class StudentSignUp extends React.Component {

    render() {

        return (
            <>
                <nav className="navbar">
                    {<FormNav />}
                </nav>
                <section className="welcome">
                    <p>Welcome</p>
                </section>
                <div className="toggle">
                <p className="current-form">signup</p>
                {'/'}
                <Link className="link" to='/students/login'>login</Link>
                </div>
                <section className="sign-up">
                    <form action="" method="post" className="form">
                        <div className="form-field">
                            <label>First name
                              <input type="text" name="studentFirstName" id="first-name" required />
                            </label>

                        </div>
                        <div className="form-field">
                            <label>Last name
                                <input type="text" name="student_last_name" id="last-name" required />
                            </label>

                        </div>
                        <div className="form-field">
                            <label>Email
                                <input type="email" name="student_email" id="email" required />
                            </label>

                        </div>
                        <div className="form-field">
                            <label>Password
                               <input type="password" minLength="8" name="student_password" id="password" autoComplete="on" required />
                            </label>

                        </div>
                        <div className="form-field">
                            <label>
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