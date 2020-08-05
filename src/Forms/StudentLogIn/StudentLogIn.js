import React from 'react'
import FormNav from '../../FormNav/FormNav'
import { Link } from 'react-router-dom'
import './StudentLogIn.css'


export default class StudentLogIn extends React.Component {

    render() {

        return (
            <>
                   <nav className="navbar">
                    {<FormNav />}
                </nav>

                <section className="welcome">
                    <p>Welcome Back</p>
                </section>
                <div className="toggle">
                    <p className="current-form">login</p>
                    {'/'}
                    <Link className="link"  to='/students/signup'>signup</Link>
                </div>
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