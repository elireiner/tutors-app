import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import StudentSignUp from "./Forms/StudentSignUp/StudentSignUp";
import TutorSignUp from "./Forms/TutorSignUp/TutorSignUp";
import StudentLogIn from "./Forms/StudentLogIn/StudentLogIn";
import TutorLogIn from "./Forms/TutorLogIn/TutorLogIn";
import TutorAddService from "./Forms/TutorAddService/TutorAddService";
import TutorsContext from "./TutorsContext";
import config from "./config";
import "./App.css";

export default class App extends React.Component {
    state = {
        users: [],
        tutors: [],
        students: [],
        error: null,
    };

    separate = (users) => {
        const tutors = this.state.users.filter((user) => user.tutor === true);
        const students = this.state.users.filter((user) => user.student === true);
        this.setState({
            tutors,
            students,
        });
    };

    setUsers = (users) => {
        users.forEach((user) => (user.rating = parseInt(user.rating)));
        console.log(users);
        this.setState({
            users,
            error: null,
        });
    };

    componentDidMount() {
        fetch(config.API_ENDPOINT, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${config.API_KEY}`,
            },
        })
            .then((response) => {
                if (!response.ok) return response.json().then((e) => Promise.reject(e));
                return response.json();
            })
            .then(this.setUsers)
            .then(this.separate)
            .catch((error) =>
                this.setState({
                    error,
                })
            );
    }

    addUser = user => {
        console.log(user)
        this.setState({
            users: [...this.state.users, user],
        },  this.separate(this.state.users));
    };

    render() {
        const contextValue = {
            users: this.state.users,
            tutors: this.state.tutors,
            students: this.state.students,
            addUser: this.addUser,
            updateUser: this.updateUser,
            deleteNote: this.deleteNote,
        };

        return (
            <div className="App">
                <TutorsContext.Provider value={contextValue}>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <MainPage tutors={this.state.tutors} {...props} />
                        )}
                    />

                    <Route path="/students/signup" component={StudentSignUp} />{" "}

                    <Route path="/tutors/add-service" component={TutorAddService} />{" "}

                    <Route path="/students/login" component={StudentLogIn} />{" "}

                    <Route path="/tutors/signup" component={TutorSignUp} />{" "}

                    <Route path="/tutors/login" component={TutorLogIn} />{" "}

                </TutorsContext.Provider>{" "}
            </div>
        );
    }
}
