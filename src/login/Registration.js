import React, { Component } from 'react';

import { register } from '../api'

import SignupForm from './SignupForm';

class Registration extends Component {
  state = {
    email: '',
    password: '',
    repeatPassword: ''
  }
  onEmail = (e) =>{
    this.setState({
        email: e.target.value
    });
  }  
  onPassword = (e) =>{
    this.setState({
      password: e.target.value
    });
  }
  onRepeatPassword = (e) =>{
    this.setState({
        repeatPassword: e.target.value
    });
  }
  onSigninSubmit = (e) =>{
    e.preventDefault();
    register(this.state.email, this.state.password);
    console.log('email: ' + this.state.email + ', password: ' + this.state.password + ',repeatPassword:' + this.state.repeatPassword);
  }
  render() {
    return(
      <SignupForm
        onSigninSubmit={this.onSigninSubmit} 
        onEmail={this.onEmail}
        email={this.state.email}
        password={this.state.password}
        onPassword={this.onPassword}
        repeatPassword={this.state.repeatPassword}
        onRepeatPassword={this.onRepeatPassword}
        
      />
    )
  }
}

export default Registration;