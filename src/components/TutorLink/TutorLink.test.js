import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TutorLink from './TutorLink';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <TutorLink />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})