import React from 'react'
import './TutorLogIn.css'


export default class TutorLogIn extends React.Component {

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
                               <input type="email" name="tutorEmail" id="email" required />
                            </label>

                        </div>
                        <div class="form-field">
                            <label for="password">Password
                                   <input type="password" minlength="8" name="tutorPassword" id="password" required />
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