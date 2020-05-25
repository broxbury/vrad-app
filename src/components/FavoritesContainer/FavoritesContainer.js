import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';
import Header from '../Header/Header.js'
import './FavoritesContainer.css'



class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      favoriteListings: this.props.favoriteListings
    }
  }

 findListing = (listingId) => {
    return this.props.favoriteListings.find(listing => listing.id === parseInt(listingId));
  }

  addFavorite = (listingToRemoveId) => {
    const listingToRemove = this.findListing(listingToRemoveId)
    this.props.addFavorite(listingToRemove)
    this.setState({
      favoriteListings: this.props.favoriteListings.filter(listing => listing.id !== listingToRemoveId)
    })
  }

  componentDidUpdate(prevProps) {
    console.log('current', this.props)
    console.log('prev', prevProps)

  }

  render() {
    const listings = this.props.favoriteListings.map(listing => {
      return <LocationCard findListing={this.findListing} key={listing.name} listingInfo={listing} addFavorite={this.addFavorite} />
    })

    return (
      <>
      <Header logOut={this.props.logOut} favCount={this.props.favCount}/>
      <div className='main-location-container'>
        <div className='location-container'>
          <div className='location-card-section'>
          {this.props.favoriteListings.length > 0 ?
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
