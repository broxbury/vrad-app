import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListingCard from './ListingCard';
import { MemoryRouter } from 'react-router-dom';

describe('ListingCard', () => {
  let listing;

  beforeEach(() => {
    listing = {
      'id': 3,
      'areaId': 590,
      'name': 'Hip RiNo Party Spot',
      'address': {
        'street': '2250 Lawrence St',
        'zip': '80205'
      },
      'details': {
        'neighborhood_id': 5124122,
        'superhost': true,
        'seller_source': '91jss1',
        'beds': 3,
        'cost_per_night': '420',
        'features': [
          'hot tub',
          'espresso machine'
        ]
      },
      'area': 'rino',
    }
  });

  it('Should display the choosen listing infomation', () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <ListingCard listingInfo={listing}/>
      </MemoryRouter>
    );

    const header = getByText('Hip RiNo Party Spot');
    const listinInfo = getByText('Num Of Beds: 3');
    const listingFeatures = getByText('ESPRESSO MACHINE');
    const favoriteBtn = getByLabelText('favorite');

    expect(header).toBeInTheDocument;
    expect(listinInfo).toBeInTheDocument;
    expect(listingFeatures).toBeInTheDocument;
    expect(favoriteBtn).toBeInTheDocument;
  });

  it('Should be able to add listing to favorites', () => {
    const mockAddFavorite = jest.fn();
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <ListingCard listingInfo={listing} addFavorite={mockAddFavorite}/>
      </MemoryRouter>
    );
    const favoriteBtn = getByLabelText('favorite');

    fireEvent.click(favoriteBtn);

    expect(mockAddFavorite).toHaveBeenCalledWith(3);
    expect(mockAddFavorite).toHaveBeenCalledTimes(1);
  })
})
