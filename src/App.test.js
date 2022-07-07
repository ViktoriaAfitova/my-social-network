import { render, screen } from '@testing-library/react';
import AppMainContainer from './App';
import React from 'react';
import ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   render(<AppMainContainer />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMainContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
