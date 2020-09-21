import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Filters from './Filters';

it.only('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Filters />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})