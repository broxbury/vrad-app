import React from 'react';
// import ListingCard from '../ListingCard.js';
import './LocationCard.css';
import { Link } from 'react-router-dom';

const LocationCard = ({ listingInfo, areaId }) => {
  console.log(listingInfo)
  const locationImg = `/images/${listingInfo.id}_a.jpg`;

  return(
    <div className='location-card'>
      <div className='location-name-address'>
        <h2>{listingInfo.name}</h2>
        <h3>{listingInfo.address.street}</h3>
      </div>
      <div className='location-card-btns'>
        <button className='favorite-btn'>Favorite
        </button>
        <Link to={`/areas/${areaId}/listings/${listingInfo.areaId}`}>
          <button className='see-listing-btn'>See Listing
          </button>
        </Link>
      </div>
      <div className='location-img' style={{backgroundImage: `url(${locationImg})`}}>
      </div>
    </div>
  )
}
export default LocationCard;
