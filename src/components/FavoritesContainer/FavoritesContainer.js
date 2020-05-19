import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';
import Header from '../Header/Header.js'
import './FavoritesContainer.css'



class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      favoriteListings: this.props.favoriteListings
    }
  }
  
 findListing = () => {
    return this.state.favoriteListings.find(listing => listing.id === parseInt(this.props.listingId));
  }

  addFavorite = (listingToRemove) => {
    this.props.addFavorite(listingToRemove)
  }

  render() {
    const listingToDisplay = this.findListing()
    const listings = this.state.favoriteListings.map(listing => {
      return <LocationCard findListing={this.findListing} key={listing.id} listingInfo={listing} addFavorite={this.addFavorite} />
    })

    return (
      <>
      <Header logOut={this.props.logOut}/>
      <div className='main-location-container'>
        <div className='location-container'>
          <div className='location-card-section'>
          {this.props.favoriteListings && listingToDisplay ? 
          ( listings )
          : ( <h2 className='no-favorites'>Please Add Favorites to Use This Feature!</h2> )
            }
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default FavoritesContainer;