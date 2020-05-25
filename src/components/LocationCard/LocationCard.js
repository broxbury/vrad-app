import React from 'react';
import './LocationCard.css';
import { Link } from 'react-router-dom';


  class LocationCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isFavorite: this.props.isFavorite || false
      }
    }

    addFavorite = (listingId) => {
      this.props.addFavorite(listingId)
      this.setState({
        isFavorite: !this.state.isFavorite
      })
    }

    render() {
      const { listingInfo } = this.props;
      const locationImg = `/images/${listingInfo.id}_a.jpg`;

      return(
        <div className='location-card'>
          <div className='location-name-address'>
            <h2>{listingInfo.name}</h2>
            <h3>{listingInfo.address.street}</h3>
          </div>
          <div className='location-card-btns'>
            <button aria-label='favorite' onClick={() => this.addFavorite(listingInfo.id)} className={this.state.isFavorite ? 'favorite-btn-active' : 'favorite-btn'}>Favorite
            </button>
            <Link to={`/areas/${listingInfo.areaId}/listings/${listingInfo.id}`} onClick={() => this.props.findListing(listingInfo.id)}>
              <button aria-label='listing' className='see-listing-btn'>See Listing
              </button>
            </Link>
          </div>
          <div className='location-img' style={{backgroundImage: `url(${locationImg})`}}>
          </div>
        </div>
      )
    }
  }
export default LocationCard;
