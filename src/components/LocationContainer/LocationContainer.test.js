import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LocationContainer from './LocationContainer';
import { BrowserRouter } from 'react-router-dom';
import { fetchedLocations } from '../../apiCalls';

describe('LocationContainer', () => {
  let mockLocationResponse;

  beforeEach(() => {
    mockLocationResponse = [
      {
        'listing_id': 3,
        'area_id': 590,
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
          'baths': 2.5,
          'cost_per_night': 420,
          'features': [
            'hot tub',
            'espresso machine'
          ]
        },
        'dev_id': 'u4gh2j',
        'area': 'rino',
        'db_connect': 834470
      }
    ]
  });

  it.skip('Should display the correct locations based on the area', async () => {
    fetchedLocations.mockResolvedValue(mockLocationResponse);

    const { getByText } = render(
      <BrowserRouter>
        <LocationContainer />
      </BrowserRouter>
    );

    const locationName = await waitFor(() => getByText('Hip RiNo Party Spot'));
    const address = await waitFor(() => getByText('2250 Lawrence St'));

    expect(locationName).toBeInTheDocument;
    expect(address).toBeInTheDocument;
  });
});
