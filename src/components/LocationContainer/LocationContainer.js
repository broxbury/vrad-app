import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';

const LocationContainer = ({ areaId, areas }) => {

  const fetchedListings = (id) => {
    const url = 'https://vrad-api.herokuapp.com';
    const currentHood = areas.find(area => area.id === parseInt(id))
    const listingPromises = currentHood.listings.map(listing => {
      return fetch(url + listing)
      .then(response => response.json()
      .then(info => {
        return {
          id: info.listing_id,
          areaId: info.area_id,
          name: info.name,
          address: info.address,
          details: info.details,
          area: info.area
        }
      }))
    })
    return Promise.all(listingPromises).then(data => {
      data.map(listing => {
      return <LocationCard key={listing.id} listingInfo={listing} />
      })
    })
  };

  const temp = fetchedListings(areaId);
  console.log('temp', temp);

  return(
    <div className='location-container'>

    </div>
  )
}
export default LocationContainer;
