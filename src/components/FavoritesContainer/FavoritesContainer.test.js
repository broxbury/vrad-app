import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoritesContainer from './FavoritesContainer';
import { MemoryRouter } from 'react-router-dom';

describe('FavoritesContainer', () => {
  it('Should show a message if there are no listings favorited', () => {
    const { getByText } = render(
      <MemoryRouter>
        <FavoritesContainer />
      </MemoryRouter>
    );
    const emptyContainerMessage = getByText('Please Add Favorites to Use This Feature!');

    expect(emptyContainerMessage).toBeInTheDocument;
  });

});
