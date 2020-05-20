import React from 'react';

import './LocationCard.css';
import { Link } from 'react-router-dom';

const LocationCard = (props) => {
  const { listingInfo, addFavorite } = props;
  const locationImg = `/images/${listingInfo.id}_a.jpg`;

  return(
    <div className='location-card'>
      <div className='location-name-address'>
        <h2>{listingInfo.name}</h2>
        <h3>{listingInfo.address}</h3>
      </div>
      <div className='location-card-btns'>
        <button onClick={() => addFavorite(listingInfo.id)} className='favorite-btn'>Favorite
        </button>
        <Link to={`/areas/${listingInfo.areaId}/listings/${listingInfo.id}`}
              onClick={() => props.findListing(listingInfo.id)}
        >
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
