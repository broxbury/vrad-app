import React, { Component } from 'react';
import './App.css';
import Login from '../LogIn/Login';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header.js';
import AreaContainer from '../AreaContainer/AreaContainer.js';
// import DataManager from '../../DataManager/DataManager.js'

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
      isLoggedIn: false,
      areas: [],
      currentListings: []
    };
  }

  fetchListings = (neighborhoodId) => {
    const url = 'https://vrad-api.herokuapp.com';
    const currentHood = this.state.areas.find(area => area.id === neighborhoodId)
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
    Promise.all(listingPromises).then(completedListings => this.setState({ currentListings: completedListings }))
  }


  // Promise.all(listingPromises).then(completeCurrentListings => this.setState({ currentListings: completeCurrentListings}))

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
      Promise.all(areaPromises).then(completeAreaData => this.setState({ areas: completeAreaData })).then(() => this.fetchListings(590))
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

  render() {
    return(
      <main className='app'>

      {!this.state.isLoggedIn ?
         <Redirect to = '/'/>
        : <Redirect to = '/areas'/>}

        <Route path='/areas' >
          <Header />
          <AreaContainer userInfo={this.state.userInfo} areas={this.state.areas}/>
        </Route>
        <Route exact path='/' >
          <Login setLoginInfo={this.setLoginInfo}/>
        </Route>
      </main>
    )
  }
}

export default App;
