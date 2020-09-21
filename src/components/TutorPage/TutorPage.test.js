import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TutorPage from './TutorPage';

it.only('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <TutorPage />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})