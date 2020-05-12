import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <header className='header'>
        <h1>vrad</h1>
        <button className='header-btns' id='favorites'>favorites</button>
        <button className='header-btns' id='areas'>areas</button>
        <button className='header-btns' id='log-out'>log out</button>
      </header>
    )
  }
}
