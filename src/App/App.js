import React from 'react'
import { Route } from 'react-router-dom'
import TutorTable from '../MainPage/MainPage'
import StudentSignUp from '../Forms/StudentSignUp/StudentSignUp'
import TutorSignUp from '../Forms/TutorSignUp/TutorSignUp'
import StudentLogIn from '../Forms/StudentLogIn/StudentLogIn'
import TutorLogIn from '../Forms/TutorLogIn/TutorLogIn'
import Nav from '../Nav/Nav'
import './App.css'


export default class App extends React.Component {

    handleMainRouter() {
        return (
            <Route
                exact
                path='/'
                component={TutorTable}
            />
        )
    }

    handleFormsRouter() {
        return (
            <>
                <Route
                    path='/students/signup'
                    component={StudentSignUp}
                />
                <Route
                    path='/students/signin'
                    component={StudentLogIn}
                />
                <Route
                    path='/tutors/signup'
                    component={TutorSignUp}
                />
                <Route
                    path='/tutors/signin'
                    component={TutorLogIn}
                />
            </>
        )
    }

    render() {

        return (
            <>
                <div className="App">
                    <nav>
                        {<Nav />}
                    </nav>
                    <section>
                        {this.handleMainRouter()}
                        {this.handleFormsRouter()}
                    </section>

                </div>

            </>
        )
    }
}