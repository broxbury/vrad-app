import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import background from './background-login.jpeg'
import './Login.css'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      accountType: 'Account Type'
    };
  }

  handleUserInfo = (e) => {
    e.preventDefault();
    const { id, value } = e.target
    if(id) {
      this.setState({ [id]: value });
    }
  }

  handleLogIn = (e) => {
    e.preventDefault();
    this.props.setLoginInfo(this.state)
  }

  render() {
    return(
      <div className='login-container'>
        <form onSubmit={(e) => this.handleLogIn(e)} className='login-form' action='#' method=''>
        <div className='field'>
          <span className='input-span'></span>
          <input id='username' onChange={(e) => this.handleUserInfo(e)} className='username' type='text' required placeholder='Username' value={this.state.value}></input>
        </div>
        <div className='field-space'>
          <span className=''></span>
          <input id='email' type='text' className='email' required placeholder='Email' onChange={(e) => this.handleUserInfo(e)}></input>
        </div>
        <div className='drop-down'>
          <select required type='select' id='accountType' onChange={(e) => this.handleUserInfo(e)}>
            <option value=''>Account Type</option>
            <option value='business'>Business</option>
            <option value='vacation'>Vacation</option>
            <option value='other'>Other</option>
          </select>
        </div>
          <button className='login-btn'>LOG IN</button>
        </form>
      </div>
    )
  }
}
