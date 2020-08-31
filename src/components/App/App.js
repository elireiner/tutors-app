import React from "react";
import { Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import StudentSignUp from "../Forms/StudentSignUp/StudentSignUp";
import TutorSignUp from "../Forms/TutorSignUp/TutorSignUp";
import StudentLogIn from "../Forms/StudentLogIn/StudentLogIn";
import TutorLogIn from "../Forms/TutorLogIn/TutorLogIn";
import TutorAddService from "../Forms/TutorAddService/TutorAddService";
import TutorsContext from "../../contexts/TutorsContext";
import config from "../../config";
import UsersApiService from '../../services/users-api-service'
import "./App.css";

export default class App extends React.Component {
    state = {
        users: [],
        tutors: [],
        students: [],
        error: null,
        currentTutors: [],
        medium: "all",
        gender: "all",
        fee: "all"
    };

    separate = (users) => {
        const tutors = this.state.users.filter((user) => user.tutor === true);
        const students = this.state.users.filter((user) => user.student === true);
        const currentTutors = this.state.users.filter((user) => user.tutor === true);
        this.setState({
            tutors,
            students,
            currentTutors
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

    addTutor = (tutor) => {
        UsersApiService.getUser(tutor.user_id)
            .then(res => {
                this.setState({
                    users: [...this.state.users, res],
                    tutors: [...this.state.tutors, res],
                    currentTutors: [...this.state.currentTutors, res]
                })
            })
            .then(res => {
                console.log(this.state.currentTutors)

            })
    };

    componentDidUpdate(prevProps, prevState) {

        console.log(this.state.gender)
        // check if filters updated:
        let filters = ["medium", "fee", "gender"]
        let changed = filters.map(filter => {
            if (prevState[filter] !== this.state[filter]) {
                return true
            }
            return false
        }).filter(boolean => boolean === true)

        console.log(changed)

        //filter only if a filter changed
        if (changed[0] === true) {

            let currentTutors = this.state.tutors;

            // Filter by medium:
            if (this.state.medium === "online") {
                currentTutors = currentTutors.filter(tutor => tutor.online_medium === true)
                //   console.log(currentTutors)
            }
            else if (this.state.medium === "person") {
                currentTutors = currentTutors.filter(tutor => tutor.in_person === true)
            }

            // Filter by gender:
            if (this.state.gender === "Male") {
                currentTutors = currentTutors.filter(tutor => tutor.gender === "Male")
            }
            else if (this.state.gender === "Female") {
                currentTutors = currentTutors.filter(tutor => tutor.gender === "Female")
            }

            // Filter by fee:
            if (this.state.fee === "25") {
                currentTutors = currentTutors.filter(tutor => tutor.fee < 25)
            }
            else if (this.state.fee === "50") {
                currentTutors = currentTutors.filter(tutor => tutor.fee < 50)
            }
            console.log(currentTutors)
            this.setState({
                currentTutors
            })
        }
    }

    setFilters = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        const contextValue = {
            users: this.state.users,
            tutors: this.state.tutors,
            students: this.state.students,
            //addUser: this.addUser,
            addTutor: this.addTutor,
            updateUser: this.updateUser,
            deleteNote: this.deleteNote,
        };
        //  console.log(this.state.currentTutors)
        return (

            <div className="App">
                <TutorsContext.Provider value={contextValue}>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <MainPage
                                currentTutors={this.state.currentTutors}
                                setFilters={this.setFilters}
                                {...props}
                            />
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
