import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';

const LocationContainer = ({ listings }) => {
  console.log(listings)
   const listingsToDisplay = listings.map(listing => {
   return <LocationCard key={listing.id} listingInfo={listing} />
  })

  return(
    <div className='location-container'>
  {listingsToDisplay}
    </div>
  )
}
export default LocationContainer;
