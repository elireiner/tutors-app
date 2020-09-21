import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TutorAddService from './TutorAddService';

it.only('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <TutorAddService />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})