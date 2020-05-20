import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LocationCard from './LocationCard';
import { BrowserRouter } from 'react-router-dom';


describe('LocationCard', () => {
  it('should render props to the page', () => {
    const locationData = 
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
    
      const { getByText } = render(
      <BrowserRouter>
        <LocationCard listingInfo={locationData}/>
      </BrowserRouter>
      )


      const listingName = getByText('Hip RiNo Party Spot')
      expect(listingName).toBeInTheDocument()
  })
})