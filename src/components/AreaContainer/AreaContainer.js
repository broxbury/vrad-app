import React from 'react';
import AreaCard from '../AreaCard/AreaCard.js';
import './AreaContainer.css';

const AreaContainer = ({ userInfo, areas, fetchListings }) => {
  const areaCards = areas.map(area => {
    return(
      <AreaCard key={area.name} fetchListings={fetchListings} areaInfo={area} />
    )
  });

  return(
    <section className='main-areas-section'>
      <div className='area-container'>
        <div className='welcome-banner'>
          <h2 aria-labelledby='where-to'>Where To, {userInfo.username}?</h2>
          <p>Select from the areas bellow to find the perfect location for your next {userInfo.accountType}</p>
        </div>
        <div className='area-card-section'>
          {areaCards}
        </div>
      </div>
    </section>
  );
}

export default AreaContainer;
