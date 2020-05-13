import React, { Component } from 'react';
import './App.css';
import Login from '../LogIn/Login'

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
      isLoggedIn: false
    };
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
  }

  render() {
    return(
      <main className='app'>
        {/* <Header />
        <Dashboard /> */}
        <Login setLoginInfo={this.setLoginInfo}/>
      </main>
      //Login
      //Header
      //DashBoard
    )
  }

}

export default App;
