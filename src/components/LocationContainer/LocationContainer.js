import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';
import Header from '../Header/Header.js';
import './LocationContainer.css';
import RiNo from './locationImgs/RiNoBackground.jpg';
import CapHill from './locationImgs/CapHillBackground.jpg';
import LoHi from './locationImgs/LoHiBackground.jpg';
import ParkHill from './locationImgs/ParkHillBackground.jpg';


class LocationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areaId: this.props.areaId,
      listings: [],
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
  };

  backgroundImgFinder = (id) => {
    switch(id) {
      case 590:
       return RiNo;
     case 751:
      return ParkHill;
    case 408:
      return LoHi;
    case 240 :
      return CapHill;
    default:
      return null;
    }
  };

  render() {
    const listingsToDisplay = this.state.listings.map(listing => {
      return <LocationCard areaId={this.props.areaId} key={listing.id} listingInfo={listing} />
    });

    const background = this.backgroundImgFinder(this.props.areaId);

    return(
      <>
        <Header logOut={this.logOut}/>
        <div className='main-location-container'>
          <div className='location-container' style={{backgroundImage: `url(${background})`}}>
            <div className='location-card-section'>
              {listingsToDisplay}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default LocationContainer;
