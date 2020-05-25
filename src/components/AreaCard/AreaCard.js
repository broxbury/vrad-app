import React from 'react';
import './AreaCard.css';
import RiNoIcon from './card-icons/RiNo.png';
import CapHillIcon from './card-icons/Cap-Hill.png';
import LoHiIcon from './card-icons/LoHi.png';
import ParkHillIcon from './card-icons/Park-Hill.png';
import { Link } from 'react-router-dom';

const AreaCard = ({ areaInfo }) => {

  const cardIcon = (name) => {
    switch(name) {
      case 'River North':
       return RiNoIcon;
     case 'Park Hill':
      return ParkHillIcon;
    case 'Lower Highlands':
      return LoHiIcon;
    case 'Capitol Hill':
      return CapHillIcon;
    default:
      return null;
    }
  };

  return(
    <div className='area-card'>
      <div className='card-img-info'>
        <img src={cardIcon(areaInfo.name)} alt={`${cardIcon(areaInfo.name)}`}/>
        <h3>{areaInfo.name}</h3>
        <p>({areaInfo.nickname})</p>
        <p>{areaInfo.about}</p>
      </div>
      <div className='card-btn-container'>
        <Link to={`/areas/${areaInfo.id}/listings`}>
          <button  aria-label='listings' className='listing-btn' id={areaInfo.id}>LISTINGS</button>
        </Link>
      </div>
    </div>
  )
}

export default AreaCard;
