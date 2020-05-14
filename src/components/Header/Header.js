import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <header>
        <div className='logo-left-btns'>
          <h1 className='logo'>vrad</h1>
          <button className='header-btns' id='favorites'>favorites</button>
          <button className='header-btns' id='areas'>areas</button>
        </div>
        <div className='right-btn'>
          <button
            onClick={() => this.props.logOut()} 
            className='header-btns' id='log-out'
          >
            log out
          </button>
        </div>
      </header>
    )
  }
}
