import React, { Component } from 'react';
import './Login.css';

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
    if (this.state.username && this.state.email && this.accontType !== 'Account Type') {
      this.props.setLoginInfo(this.state)
    }
  }

  render() {
    return(
      <div className='login-container'>
        <form onSubmit={(e) => this.handleLogIn(e)} className='login-form' action='#' method=''>
          <h1 className='login-logo'>Vrad</h1>
          <div classNmae='form-container'>
            <div className='field'>
              <input id='username' onChange={(e) => this.handleUserInfo(e)} className='username' type='text' required placeholder='Username' value={this.state.value}></input>
            </div>
            <div className='field'>
              <input id='email' type='email' className='email' required placeholder='Email' onChange={(e) => this.handleUserInfo(e)}></input>
            </div>
            <div className='drop-down'>
              <select className='drop-down-field' required type='select' aria-label="account type" id='accountType' onChange={(e) => this.handleUserInfo(e)}>
                <option value=''>Account Type</option>
                <option value='business trip'>Business</option>
                <option value='vacation'>Vacation</option>
                <option value='trip'>Other</option>
              </select>
            </div>
              <button aria-label='submit' placeholer='log-ing-btn' className='login-btn'>LOG IN</button>
          </div>
        </form>
      </div>
    )
  }
}
