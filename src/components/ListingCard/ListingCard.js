import React from 'react';
import './ListingCard.css';

const ListingCard = ({ listingInfo, addFavorite }) => {
  console.log('listingInfo', listingInfo)

  const listingFeatures = listingInfo.details.features.map((feature, i) => {
    let featureItem = <li key={i}>{feature}</li>;
    return featureItem;
  });

  return(
    <div className='listing-card-container'>
      <div className='listing-card'>
        <div className='listing-name-address'>
          <h2>{listingInfo.name}</h2>
          <h4>{listingInfo.area}/ {listingInfo.address.street}, {listingInfo.address.zip}</h4>
        </div>
        <div className='features-and-btn'>
          <div className='listinInfo'>
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
          <button onClick={() => addFavorite(listingInfo.id)} className='favorite-btn'>Favorite</button>
        </div>
        <div className='listing-imgs'>
          <img src={`/images/${listingInfo.id}_a.jpg`} />
          <img src={`/images/${listingInfo.id}_b.jpg`} />
          <img src={`/images/${listingInfo.id}_c.jpg`} />
        </div>
      </div>
    </div>
  )
}

export default ListingCard
