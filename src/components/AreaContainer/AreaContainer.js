import React from 'react';
// import AreaCard from '../AreaCard.js';

const AreaContainer = ({ userInfo, areas }) => {
  console.log('name', userInfo.username);
  return(
    <div className='area-container'>
      <div className='welcome-banner'>
        <h3>Where To, {userInfo.username}?</h3>
        <p>Select from the areas bellow to find the perfect location for your next {userInfo.accountType} trip</p>
      </div>
    </div>
  )
}

export default AreaContainer;
