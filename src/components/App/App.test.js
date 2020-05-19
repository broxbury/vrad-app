import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { fetchedAreas, fetchedLocations } from '../../../apiCalls.js';


describe('App', () => {
  let mockAreaResponse;
  let mockLocationResponse;

  beforeEach(() => {
    mockAreaResponse = [
      {
        nickName: 'RiNo',
        name: 'River North',
        details: '/api/v1/areas/590'
      },
      {
        nickName: 'Park Hill',
        name: 'Park Hill',
        details: '/api/v1/areas/751'
      }
    ]

    mockLocationResponse = [
      {
        listing_id:3,
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
    ];
  });


  it('When the App loads, we should see the login Page', () => {
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

  it.skip('Should change to the Areas Page once succesfully logged in', () => {
    fetchedArea.mockResolvedValue(mockAreaResponse);

    const { getByText, getByPlaceHolder, getByLableText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => {
      fireEvent.change(getByPlaceholderText('Username'), {
        target: {value: 'Mock User'}
      });
      fireEvent.change(getByPlaceholderText('Email'), {
        target: {value: 'MockEmial@msn.com'}
      });
      fireEvent.change(getByLableText('Account Type'), {
        target: {value: 'vacation'}
      });
    });

    fireEvent.click(getByText('Log In'));

    const rino = await waitFor(() => getByText('River North'));
    const parkHill = await waitFor(() => getByText('Park Hill'));
    const lohi = await waitFor(() => getByText('Lower Highlands'));
    const capHill = await waitFor(() => getByText('Capital Hill'));

    expect(rino).toBeInTheDocument();
    expect(parkHill).toBeInTheDocument();
    expect(lohi).toBeInTheDocument();
    expect(capHill).toBeInTheDocument();
  });

  it.skip('Should change to the desired Location Page', () => {
    fetchedArea.mockResolvedValue(mockAreaResponse);
    fetchedLocations.mockResolvedValue(mockLocationResponse);

    const { getByText, getByPlaceHolder, getByLableText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => {
      fireEvent.change(getByPlaceholderText('Username'), {
        target: {value: 'Mock User'}
      });
      fireEvent.change(getByPlaceholderText('Email'), {
        target: {value: 'MockEmial@msn.com'}
      });
      fireEvent.change(getByLableText('Account Type'), {
        target: {value: 'vacation'}
      });
    });

    fireEvent.click(getByText('Log In'));

    const rino = await waitFor(() => getByText('River North'));
    const allListingBtn = await waitFor(() => getByText('Listings'));

    fireEvent.click(allListingBtn);

    const rinoListing1 = await waitFor(() => getByText('Hip RiNo Party Spot'));
    const rinoListing2 = await waitFor(() => getByText('Lowkey Industrial Chic'));
    const rinoListing3 = await waitFor(() => getByText('Upscale Modern Apartments'));

    expect(rinoListing1).toBeInTheDocument;
    expect(rinoListing2).toBeInTheDocument;
    expect(rinoListing3).toBeInTheDocument;
  });

  it.skip('Should change to desired single Listing Page', () => {
    fetchedArea.mockResolvedValue(mockAreaResponse);
    fetchedLocations.mockResolvedValue(mockLocationResponse);

    const { getByText, getByPlaceHolder, getByLableText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => {
      fireEvent.change(getByPlaceholderText('Username'), {
        target: {value: 'Mock User'}
      });
      fireEvent.change(getByPlaceholderText('Email'), {
        target: {value: 'MockEmial@msn.com'}
      });
      fireEvent.change(getByLableText('Account Type'), {
        target: {value: 'vacation'}
      });
    });

    fireEvent.click(getByText('Log In'));

    const rino = await waitFor(() => getByText('River North'));
    const allListingBtn = await waitFor(() => getByText('Listings'));

    fireEvent.click(allListingBtn);

    const seeListingBtn = await waitFor(() => getByText('See Listing'));

    fireEvent.click(seeListingBtn);

    const features = await waitFor(() => getByText('Hot Tub'))
    const details = await waitFor(() => getByText('Cost Per Night: $420'))
    const address = await waitFor(() => getByText('rino/ 2250 Lawrence St, 80205'));

    expect(features).toBeInTheDocument;
    expect(details).toBeInTheDocument;
    expect(address).toBeInTheDocument;
  });

  it.skip('Should change to Favorites Page', () => {
    fetchedArea.mockResolvedValue(mockAreaResponse);
    fetchedLocations.mockResolvedValue(mockLocationResponse);

    const { getByText, getByPlaceHolder, getByLableText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => {
      fireEvent.change(getByPlaceholderText('Username'), {
        target: {value: 'Mock User'}
      });
      fireEvent.change(getByPlaceholderText('Email'), {
        target: {value: 'MockEmial@msn.com'}
      });
      fireEvent.change(getByLableText('Account Type'), {
        target: {value: 'vacation'}
      });
    });

    fireEvent.click(getByText('Log In'));

    const rino = await waitFor(() => getByText('River North'));
    const allListingBtn = await waitFor(() => getByText('Listings'));

    fireEvent.click(allListingBtn);

    const seeListingBtn = await waitFor(() => getByText('See Listing'));

    fireEvent.click(seeListingBtn);

    const favoriteBtn = await waitFor(() => getByText('Favorite'));
    const seeFavoritesBtn = await waitFor(() => getByText('Favorites'));

    fireEvent.click(favoriteBtn);

    const favoritePage = await waitFor(() => getByText('Favorite Listings'));
    const testFavoriteListing = await waitFor(() => getByText('Hip RiNo Party Spot'));

    expect(favoritePage).toBeInTheDocument;
    expect(testFavoriteListing).toBeInTheDocument;

  });


})
