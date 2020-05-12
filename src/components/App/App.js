import React, { Component } from 'react';
import './App.css';
import Login from '../LogIn/Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        email: '',
        accountType: '',
        favoriteLocations: []
      }
    };
  }

  setLoginInfo = (info) => {
    const userInfo = this.state.userInfo;
    this.setState({
      userInfo: {
        name: info.name,
        email: info.email,
        accountType: info.accountType
      }
    })
    console.log('info', info)
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
