import React from 'react';
import './LocationCard.css';
import { Link } from 'react-router-dom';

const LocationCard = ({ listingInfo }) => {
  return(
    <div className='location-card'>
      <div className='location-info'>
        <h2>{listingInfo.name}</h2>
        <p>{listingInfo.address.street}</p>
        <div className='location-card-buttons'>
        <button className='card-button'>FAVORITE</button>
        <Link to= {`/areas/${listingInfo.areaId}/listings/${listingInfo.id}`}>
        <button className='card-button'>SEE LISTING</button>
        </Link>
      </div>
      <div className='location-img'></div>
      </div>  
    </div>
    
  )
}
export default LocationCard;