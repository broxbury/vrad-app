import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('should sign a user out when sign-out is invoked', () => {
    const mockLogOut = jest.fn();
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Header logOut={mockLogOut}/>
      </MemoryRouter>
    )

    fireEvent.click(getByPlaceholderText('log-out'));
    expect(mockLogOut).toHaveBeenCalled()
  })
  
})