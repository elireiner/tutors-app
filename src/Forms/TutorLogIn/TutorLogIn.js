import React from 'react'
import './TutorLogIn.css'


export default class TutorLogIn extends React.Component {

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
                               <input type="email" name="tutorEmail" id="email" required />
                            </label>

                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Password
                                   <input type="password" minLength="8" name="tutorPassword" id="password" autoComplete="on" required />
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