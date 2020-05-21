import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('Should render a logo and a favorites, areas and log out button', () => {

    const { getByText, getByLabelText } = render(

      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = getByText('vrad');
    const favoritesBtn = getByLabelText('favorite-page');
    const areasBtn = getByText('areas');
    const logoBtn = getByText('log out');

    expect(logo).toBeInTheDocument;

    expect(favoritesBtn).toBeInTheDocument;

    expect(areasBtn).toBeInTheDocument;
    
    expect(logoBtn).toBeInTheDocument;
  });

  it('Should sign a user out when sign-out is invoked', () => {
    const mockLogOut = jest.fn();
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Header logOut={mockLogOut}/>
      </MemoryRouter>
    )

    fireEvent.click(getByPlaceholderText('log-out'));
    expect(mockLogOut).toHaveBeenCalled()
  });

});
