import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';

const LocationContainer = ({ listings }) => {
  const listingsToDisplay = listings.map(listing => {
    return <LocationCard key={listing.id} info={listing}/>
  })

  return(
    <div className='location-container'>
      {listingsToDisplay}
    </div>
  )
}
export default LocationContainer;