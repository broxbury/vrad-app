import React from 'react';

const ListingCard = (listingInfo) => {
  return(
    <div className='listing-card'>
     <div>
       <h2>{listingInfo.name}</h2>
     </div>
    </div>
  )
}

export default ListingCard