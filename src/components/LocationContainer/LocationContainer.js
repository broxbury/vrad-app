import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';
import './LocationContainer.css';
import Header from '../Header/Header.js';
import ListingCard from '../ListingCard/ListingCard.js';

class LocationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areaId: this.props.areaId,
      listings: [],
      renderSingleCard: this.props.renderSingleCard
    }
  }

  componentDidMount = () => {
    const url = 'https://vrad-api.herokuapp.com';
    const currentHood = this.props.areas.find(area => area.id === this.state.areaId)
    const listingPromises = currentHood.listings.map(listing => {
      return fetch(url + listing)
      .then(response => response.json()
      .then(info => {
        return {
          id: info.listing_id,
          areaId: info.area_id,
          name: info.name,
          address: info.address,
          details: info.details,
          area: info.area
        }
      }))
    })
    Promise.all(listingPromises).then(completeListings => this.setState({ listings: completeListings }))
  }


  render() { 

    const listingsToDisplay = this.state.listings.map(listing => {
         return <LocationCard key={listing.id} listingInfo={listing} />
    })
    const listingToDisplay = this.state.listings.find(listing => listing.id === parseInt(this.props.listingId))
    const cardToDisplay = <ListingCard listingInfo={listingToDisplay}/>
    if (!this.state.renderSingleCard) {
      return(
        <div className='area-container'>
        <Header logOut={this.props.logOut} />
          <div className='area-card-section'>
            <div className='area-card-display'>
              {listingsToDisplay}
            </div>
          </div>
        </div> 
      )
    } else {
      return(
        <div className='area-container-single'>
        <Header logOut={this.props.logOut} />
          <div className='area-card-section'>
            <div className='area-card-display-single'>
              {cardToDisplay}
            </div>
          </div>
        </div> 
      )
    }
  }
}

export default LocationContainer;