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
             id: info.id,
             name: info.name,
             nickname: area.area,
             location: info.location,
             about: info.about,
             listings: info.listings
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

        <Route path='/areas' >
          <Header logOut={this.logOut}/>
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
