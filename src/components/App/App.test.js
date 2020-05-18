import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


describe('App', () => {
  it('When the App loads, we should see the login Page', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    //assert the app renders the log in container:
    expect(getByText('Account Type')).toBeInTheDocument();
    // fire log in event:
    fireEvent.click(getByText('LOG IN'));
    //assert that the Area Container is rendered after the user signs-in:
    expect(getByTestId('where-to')).toBeInTheDocument();
  })
})

