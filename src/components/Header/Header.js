import React, { Component } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

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
          <NavLink to='/favorites'>
          <button className='header-btns' id='favorites'>favorites</button>
          </NavLink>
          <Link to={`/areas/`}>
            <button className='header-btns' id='areas'>areas</button>
          </Link>
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
