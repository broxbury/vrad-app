import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const favoriteCount = this.props.favCount
    return(
      <header>
        <div className='logo-left-btns'>
          <h1 className='logo'>vrad</h1>
          <NavLink to='/favorites' exact className='header-btns' activeClassName='header-btns-active'>
          <h3>{`favorites-${favoriteCount}`}</h3>
          </NavLink>
          <NavLink to={`/areas`} exact className='header-btns' activeClassName='header-btns-active'>
            <h3>areas</h3>
          </NavLink>
        </div>
        <div className='right-btn'>
          <button
            onClick={() => this.props.logOut()}
            className='header-btns' id='log-out'
            placeholder='log-out'
          >
            log out
          </button>
        </div>
      </header>
    )
  }
}
