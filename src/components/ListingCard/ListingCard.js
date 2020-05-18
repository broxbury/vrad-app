import React from 'react';

const ListingCard = ({ listingInfo }) => {
  console.log('listingInfo', listingInfo);
  return(
    <div className='listing-card'>
     <div>
        {listingInfo && listingInfo.name && (
          <>
          <h2>{listingInfo.name}</h2>
          </>
        )}
     </div>
    </div>
  )
}

export default ListingCard
