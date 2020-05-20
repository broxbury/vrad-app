import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { fetchedAreas, fetchedLocations, fetchedAreaInfo } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('App', () => {
  let mockAreaResponse;
  let mockLocationResponse;
  let mockAreaInfoResponse;



  beforeEach(() => {

    mockAreaResponse = {
      areas: [
        {
           "area": "RiNo",
           "details": "/api/v1/areas/590"
       }
      ]
    }

    mockAreaInfoResponse = {
      "id": 590,
          "name": "River North",
          "location": "North of Downtown Denver",
          "about": "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
          "region_code": 6356834,
          "quick_search": "o5kod9f5cqo0",
          "listings": [
              "/api/v1/listings/3"
          ]
    }

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


  it('When the App loads, we should see the login Page', () => {
    fetchedAreas.mockResolvedValueOnce(mockAreaResponse);
    fetchedAreaInfo.mockResolvedValueOnce(mockAreaInfoResponse);
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
  });

  it('Should change to the Areas Page once succesfully logged in', async () => {
    fetchedAreas.mockResolvedValueOnce(mockAreaResponse);
    fetchedAreaInfo.mockResolvedValueOnce(mockAreaInfoResponse);

    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.click(getByText('LOG IN'));

    const rino = await waitFor(() => getByText('River North'));

    expect(rino).toBeInTheDocument();
  });

  it('Should change to the desired Location Page', async () => {
    fetchedAreas.mockResolvedValueOnce(mockAreaResponse);
    fetchedAreaInfo.mockResolvedValueOnce(mockAreaInfoResponse);
    fetchedLocations.mockResolvedValueOnce(mockLocationResponse);

    const { getByText, getByPlaceHolderText, getByLabelText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.click(getByText('LOG IN'));


    const allListingBtn = await waitFor(() => getByLabelText('listings'));

    fireEvent.click(allListingBtn);

    const rinoListing = await waitFor(() => getByText('Hip RiNo Party Spot'));

    expect(rinoListing).toBeInTheDocument;
  });


  it('Should change to desired single Listing Page', async () => {
    fetchedAreas.mockResolvedValueOnce(mockAreaResponse);
    fetchedAreaInfo.mockResolvedValueOnce(mockAreaInfoResponse);
    fetchedLocations.mockResolvedValue(mockLocationResponse);

    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.click(getByText('LOG IN'));

    const allListingBtn = await waitFor(() => getByLabelText('listings'));

    fireEvent.click(allListingBtn);


    const seeListingBtn = await waitFor(() => getByLabelText('listing'))

    fireEvent.click(seeListingBtn);

    const features = await waitFor(() => getByText('hot tub'))
    const details = await waitFor(() => getByText('Cost Per Night: $420'))
    const address = await waitFor(() => getByText('rino/ 2250 Lawrence St, 80205'));

    expect(features).toBeInTheDocument;
    expect(details).toBeInTheDocument;
    expect(features).toBeInTheDocument;
  });

  it.skip('Should change to Favorites Page', async () => {
    fetchedAreas.mockResolvedValue(mockAreaResponse);
    fetchedAreaInfo.mockResolvedValueOnce(mockAreaInfoResponse);
    fetchedLocations.mockResolvedValue(mockLocationResponse);

    const { getByText, getByPlaceHolder, getByLabelText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

<<<<<<< HEAD

=======
>>>>>>> master
    fireEvent.click(getByText('LOG IN'));
    //LocationContainer - event happens on the listings btn
    const allListingBtn = await waitFor(() => getByLabelText('listings'));

    fireEvent.click(allListingBtn); 

    //click on individual listing
    const seeListingBtn = await waitFor(() => getByLabelText('listing'))

    fireEvent.click(seeListingBtn);
    //user favorites the page
    const favoriteListings = await waitFor(() => getByLabelText('favorite'))

    fireEvent.click(favoriteListings);
    //user navigates to the favorites page
    const navigateToFavorites = getByLabelText('favorite-page')
    fireEvent.click(navigateToFavorites)

    // const favoritePage = await waitFor(() => getByText('Favorite Listings'));
    const testFavoriteListing = await waitFor(() => getByText('Hip RiNo Party Spot'));

    // expect(favoritePage).toBeInTheDocument;
    expect(testFavoriteListing).toBeInTheDocument;
  });
})
