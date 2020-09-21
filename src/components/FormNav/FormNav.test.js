import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FormNav from './FormNav';

it.only('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <FormNav />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})