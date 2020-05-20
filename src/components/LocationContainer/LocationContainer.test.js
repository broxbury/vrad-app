import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LocationContainer from './LocationContainer';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { fetchedLocations, mockAreaResponse, mockAreaInfoResponse } from '../../apiCalls';
jest.mock('../../apiCalls')

describe('LocationContainer', () => {
  let mockLocationResponse;
  let mockAreaInfoResponse;

 
  beforeEach(() => {
 
    mockAreaInfoResponse = [{
      "id": 590,
      nickName: 'RiNo',
          "name": "River North",
          "location": "North of Downtown Denver",
          "about": "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
          "region_code": 6356834,
          "quick_search": "o5kod9f5cqo0",
          "listings": [
              "/api/v1/listings/3" 
          ]
    }]

    mockLocationResponse = 
      {
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
      }
    })

  it('should pass props to its chile =>> ListingCard', async () => {
    fetchedLocations.mockResolvedValueOnce(mockLocationResponse);

    const { getByText } = render(
      <MemoryRouter>
        <LocationContainer areas={mockAreaInfoResponse} areaId={590} renderSingleCard={false} />
      </MemoryRouter>
    );

    const locationName = await waitFor(() => getByText('Hip RiNo Party Spot'));
    const address = await waitFor(() => getByText('2250 Lawrence St'));

    expect(locationName).toBeInTheDocument;
    expect(address).toBeInTheDocument;
  });

  it('should pass props to its child =>> LocationCard when renderSingleCard prop is passed as false', async () => {
    fetchedLocations.mockResolvedValueOnce(mockLocationResponse);

    const { getByText } = render(
      <MemoryRouter>
        <LocationContainer areaId={590} areas={mockAreaInfoResponse} listingId={3} renderSingleCard={true} />
      </MemoryRouter>
    );
  
    const listingPrice = await waitFor(() => getByText('hot tub'));
    expect(listingPrice).toBeInTheDocument();
  });
});
