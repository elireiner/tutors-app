import React from 'react'

const TutorsContext = React.createContext({
  users: [],
  tutors: [],
  students: [],
  addUser: () => {},
  updateUser: () => {},
  deleteNote: () => {},
})

export default TutorsContext