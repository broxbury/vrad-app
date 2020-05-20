import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Login from './Login.js';


describe('Login', () => {
  it('should only advance to the Areas page when user info is provided', () => {
    const mockLogin = jest.fn();

    const { getByPlaceholderText, getByText, getByLabelText } = render(
      <MemoryRouter>
        <Login setLoginInfo={mockLogin} />
      </MemoryRouter>
    )

    fireEvent.change(getByPlaceholderText('Username'), {
      target: { value: 'user1' }
    });
    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'user1@gmail.com'}
    });
    fireEvent.click(getByText('LOG IN'));
    fireEvent.change(getByLabelText('account type'), {
      target: { value: 'Other'}
    })
    expect(mockLogin).toHaveBeenCalledTimes(1)
  })

  it('should not advance if info is not provide correctly', () => {
    const mockLogin = jest.fn();

    const { getByPlaceholderText, getByLabelText } = render(
      <MemoryRouter>
        <Login setLoginInfo={mockLogin} />
      </MemoryRouter>
    )

    fireEvent.change(getByPlaceholderText('Username'), {
      target: { value: '' }
    });
    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'user1gmail.com'}
    });
    fireEvent.click(getByLabelText('submit'))
    expect(mockLogin).toHaveBeenCalledTimes(0)
    })
}) 