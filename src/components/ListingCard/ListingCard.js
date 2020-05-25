import React from 'react';
import './ListingCard.css';

const ListingCard = ({ listingInfo, addFavorite }) => {

  const listingFeatures = listingInfo.details.features.map((feature, i) => {
    let featureItem = <li key={i}>{feature.toUpperCase()}</li>;
    return featureItem;
  });


  return(
    <div className='listing-card-container'>
      <div className='listing-card'>
        <div className='listing-name-address'>
          <h2>{listingInfo.name}</h2>
          <h4>{listingInfo.address.street}, {listingInfo.address.zip}</h4>
        </div>
        <div className='features-and-btn'>
          <div className='listingInfo'>
            <p>Cost Per Night: ${listingInfo.details.cost_per_night}</p>
            <p>Num Of Beds: {listingInfo.details.beds}</p>
            <p>Num Bathrooms: {listingInfo.details.baths}</p>
          </div>
          <div className='listingFeatures'>
            <p>Features:</p>
            <ul>
              {listingFeatures}
            </ul>
          </div>
          <button aria-label='favorite' onClick={() => addFavorite(listingInfo.id)} className='favorite-btn-listing'>Favorite</button>
        </div>
        <div className='listing-imgs'>
          <img src={`/images/${listingInfo.id}_a.jpg`} alt={`${listingInfo.name}`} />
          <img src={`/images/${listingInfo.id}_b.jpg`} alt={`${listingInfo.name}`} />
          <img src={`/images/${listingInfo.id}_c.jpg`} alt={`${listingInfo.name}`} />
        </div>
      </div>
    </div>
  )
}

export default ListingCard
