import React, { Component } from 'react';
import './App.css';
import Login from '../LogIn/Login';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from '../Header/Header.js';
import AreaContainer from '../AreaContainer/AreaContainer.js';
import LocationContainer from '../LocationContainer/LocationContainer.js'
import LocationCard from '../LocationCard/LocationCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: '',
        email: '',
        accountType: '',
        favoriteLocations: []
      },
      isLoggedIn: true,
      areas: [],
      currentListings: []
    };
  }

  fetchListings = (neighborhoodId) => {
    const url = 'https://vrad-api.herokuapp.com';
    const currentHood = this.state.areas.find(area => area.id === parseInt(neighborhoodId))
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
    Promise.all(listingPromises).then(completeListings => this.setState({ currentListings: completeListings }))
  }


  componentDidMount() {
    const url = 'https://vrad-api.herokuapp.com'
    fetch(url + '/api/v1/areas')
     .then(response => response.json())
     .then(areaData => {
       const areaPromises = areaData.areas.map(area => {
         return fetch(url + area.details)
         .then(response => response.json())
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
        accountType: '',
        favoriteLocations: []
      },
      isLoggedIn: false
    })
  };

  render() {
    return(
      <main className='app'>

      {!this.state.isLoggedIn ?
         <Redirect to = '/'/>
        : <Redirect to = '/areas'/>}

        <Route exact path='/areas' >
          <Header logOut={this.logOut}/>
          <AreaContainer fetchListings={this.fetchListings} userInfo={this.state.userInfo} areas={this.state.areas}/>
        </Route>
          <Route exact path='/areas/:id/listings' render={({ match }) =>
          <LocationContainer
          areaId={(parseInt(match.params.id))} listings={this.state.currentListings}
          />} />
        <Route exact path='/' >
          <Login setLoginInfo={this.setLoginInfo} />
        </Route>
      </main>
    )
  }
}

export default App;
