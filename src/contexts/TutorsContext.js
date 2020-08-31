import React from 'react'

const TutorsContext = React.createContext({
  users: [],
  tutors: [],
  students: [],
  addUser: () => {},
  addTutor: () => {},
  updateUser: () => {},
  deleteNote: () => {},
})

export default TutorsContext