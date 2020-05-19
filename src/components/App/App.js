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
        accountType: ''
      },
      isLoggedIn: true,
      areas: [],
      favoriteLocations: []

    };
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
        accountType: ''
      },
      isLoggedIn: false,
      favoriteLocations: []
    })
  };

  removeFavorite = (listingToRemove) => {
    let currentState = [...this.state.favoriteLocations];
    let filteredArray = currentState.filter(listing => listing.id !== listingToRemove.id)
  
    this.setState({ favoriteLocations: filteredArray})
   
  }

  addFavorite = async (listingToAdd) => {
    if (this.state.favoriteLocations.includes(listingToAdd)) {
      await this.removeFavorite(listingToAdd)
    } else {
     await this.setState({
        favoriteLocations: [
          ...this.state.favoriteLocations,
         listingToAdd
        ]
      })
    }
    console.log(this.state.favoriteLocations)
   }

  render() {
    return(
      <main className='app' data-testid='app'>

      {!this.state.isLoggedIn ?
         <Redirect to = '/'/>
        : <Redirect to = '/areas'/>}

        <Route exact path='/areas' >
          <Header logOut={this.logOut}/>
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
                             />} 

                             />
        <Route exact path='/favorites' >
        <LocationContainer 
                             favoriteListings={this.state.favoriteListings}
                             areas={this.state.areas} 
                             logOut={this.logOut} 
                             renderSingleCard={false}
                             addFavorite={this.addFavorite}
                             />
        </Route>
        <Route path='/areas/:id/listings/:listing_id' render={({ match }) => 

         { 
         return (<LocationContainer areaId={(parseInt(match.params.id))}
                             listingId={match.params.listing_id}
                             areas={this.state.areas} 
                             logOut={this.logOut} 
                             renderSingleCard={true}
                             addFavorite={this.addFavorite}
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
