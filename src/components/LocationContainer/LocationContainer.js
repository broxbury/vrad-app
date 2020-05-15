import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';

class LocationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areaId: this.props.areaId,
      listings: []
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
   
    return(
      <div className='location-container'>
    {listingsToDisplay}
      </div>
    )
  }
}

export default LocationContainer;