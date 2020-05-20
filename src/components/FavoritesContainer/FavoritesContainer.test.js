import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoritesContainer from './FavoritesContainer';
import { MemoryRouter } from 'react-router-dom';

describe('FavoritesContainer', () => {
  it('Should show a favorite listings', () => {
    const favLocations = [{
       
        listing_id: 3,
        area_id: 590,
        name: 'Hip RiNo Party Spot',
        address: {
          street: '2250 Lawrence St',
          zip: '80205'
        },
        details: {
          neighborhood_id: 5124122,
          superhost: true,
          seller_source: '91jss1',
          beds: 3,
          baths: 2.5,
          cost_per_night: 420,
          features: ['hot tub', 'espresso machine']
        },
        dev_id: 'u4gh2j',
        area: 'rino',
        db_connect: 834470
      }]
    
    const { getByText } = render(
      <MemoryRouter>
        <FavoritesContainer favoriteListings={favLocations} />
      </MemoryRouter>
    );
    const locationDescription = getByText('Hip RiNo Party Spot');

    expect(locationDescription).toBeInTheDocument(); 
  });
  
  it('should display a message if there are no favorite locations', () => {
    const favLocations = []
    const { getByText } = render(
      <MemoryRouter>
        <FavoritesContainer favoriteListings={favLocations} />
      </MemoryRouter>
    );
    const message = getByText('Please Add Favorites to Use This Feature!');
    expect(message).toBeInTheDocument();  
  });
});
