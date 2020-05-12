import React from 'react';
import { withRouter } from 'react-router-dom'

import Login from './Login';

import { login } from '../api';


class WelcomePage extends React.Component {
  state ={
    email: '',
    password: ''
  }
  onEmailChange = (e) =>{
    this.setState({
        email: e.target.value
    })
  }  
  onPasswordChahge = (e) =>{
    this.setState({
      password: e.target.value
    })
  }
  onSigninSubmit = async (e) =>{
    e.preventDefault();
    const user = await login(this.state.email, this.state.password);
    if (!user.error) {
      this.props.history.replace('/');
    }
  }
  render() {
    return(
      <Login 
        onSigninSubmit={this.onSigninSubmit} 
        onEmailChange={this.onEmailChange}
        email={this.state.email}
        password={this.state.password}
        onPasswordChahge={this.onPasswordChahge}
      />
    )
  }
}

export default withRouter(WelcomePage);