import React from 'react'
import { Route } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import StudentSignUp from '../Forms/StudentSignUp/StudentSignUp'
import TutorSignUp from '../Forms/TutorSignUp/TutorSignUp'
import StudentLogIn from '../Forms/StudentLogIn/StudentLogIn'
import TutorLogIn from '../Forms/TutorLogIn/TutorLogIn'
import ApiContext from '../ApiContext'
import config from '../config'
import './App.css'


export default class App extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            })
            .then(responseJson => {
                this.setState({ responseJson })
            })
            .catch(error => {
                console.error({ error })
            })
    }

    handleMainRouter() {
        return (
            <Route
                exact
                path='/'
                component={MainPage}
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
                    path='/students/login'
                    component={StudentLogIn}
                />
                <Route
                    path='/tutors/signup'
                    component={TutorSignUp}
                />
                <Route
                    path='/tutors/login'
                    component={TutorLogIn}
                />
            </>
        )
    }

    render() {
        console.log(this.state)
        return (
            <>
                <div className="App">
                    <section>
                        {this.handleMainRouter()}
                        {this.handleFormsRouter()}
                    </section>

                </div>

            </>
        )
    }
}