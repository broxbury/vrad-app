import React, { Component } from 'react';
import './App.css';
import Login from '../LogIn/Login';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from '../Header/Header.js';
import AreaContainer from '../AreaContainer/AreaContainer.js';
import LocationContainer from '../LocationContainer/LocationContainer.js'
import LocationCard from '../LocationCard/LocationCard';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer.js'
import { fetchedAreas, fetchedAreaInfo } from '../../apiCalls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: '',
        email: '',
        accountType: ''
      },
      isLoggedIn: true,
      areas: [],
      favoriteLocations: []

    };
  }

  componentDidMount() {
    fetchedAreas()
     .then(areaData => {
       const areaPromises = areaData.areas.map(area => {
         return fetchedAreaInfo(area.details)
         .then(info => {
           return {
             nickname: area.area,
             ...info
           }
         })
       })
      Promise.all(areaPromises).then(completeAreaData => this.setState({ areas: completeAreaData }))
    })
  }

  setLoginInfo = (info) => {
    const { username, email, accountType } = info;
    this.setState({
      userInfo: {
        username: username,
        email: email,
        accountType: accountType
      },
      isLoggedIn: true
    });
  };

  logOut = () => {
    this.setState({
      userInfo: {
        username: '',
        email: '',
        accountType: ''
      },
      isLoggedIn: false,
      favoriteLocations: []
    })
  };

  removeFavorite = (listingToRemove) => {
    let currentState = [...this.state.favoriteLocations];
    let filteredArray = currentState.filter(listing => listing.id !== listingToRemove.id)
    console.log('this.stat.favlocations', currentState)
    this.setState({ favoriteLocations: filteredArray})
  }

  addFavorite = (listingToAdd) => {
    if (this.state.favoriteLocations.find(listing => listing.id === listingToAdd.id)) {
      console.log('found!', listingToAdd)
      this.removeFavorite(listingToAdd)
      console.log('listingToAdd', listingToAdd)
    } else {
      console.log('listingToAdd2', listingToAdd)
    
     this.setState({
        favoriteLocations: [
          ...this.state.favoriteLocations,
         listingToAdd
        ]
      })
      // console.log('fav locations', this.state.favoriteLocations)
    }
   }

  render() {
    return(
      <main className='app' data-testid='app'>

      {!this.state.isLoggedIn ?
         <Redirect to = '/'/>
        : <Redirect to = '/areas'/>}

        <Route exact path='/areas' >
          <Header logOut={this.logOut} favCount={this.state.favoriteLocations.length} />
          <AreaContainer fetchListings={this.fetchListings}
                         userInfo={this.state.userInfo}
                         areas={this.state.areas} />
        </Route>

        <Route exact path='/areas/:id/listings' render={({ match }) =>
          <LocationContainer
                             areaId={(parseInt(match.params.id))}
                             areas={this.state.areas}
                             logOut={this.logOut}
                             renderSingleCard={false}
                             addFavorite={this.addFavorite}
                             favCount={this.state.favoriteLocations.length}
                             />}

                             />
        <Route exact path='/favorites' >
        <FavoritesContainer favoriteListings={this.state.favoriteLocations} addFavorite={this.addFavorite} logOut={this.logOut} favCount={this.state.favoriteLocations.length}/>
        </Route>
        <Route path='/areas/:id/listings/:listing_id' render={({ match }) =>

         {
         return (<LocationContainer areaId={(parseInt(match.params.id))}
                             listingId={match.params.listing_id}
                             areas={this.state.areas}
                             logOut={this.logOut}
                             renderSingleCard={true}
                             addFavorite={this.addFavorite}
                             favCount={this.state.favoriteLocations.length}
                             />)}
                             }
                             />
        <Route exact path='/' >
          <Login setLoginInfo={this.setLoginInfo} />
        </Route>
      </main>
    )
  }
}
{/* <LocationContainer currentListingId={parseInt(match.params.id)} /> */}

export default App;
