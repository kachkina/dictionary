import React from 'react';

import SignupForm from './SignupForm';

class Registration extends React.Component {
    state ={
        email: '',
        password: '',
        repeatPassword: ''
      }
      onEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
      }  
      onPassword = (e) =>{
        this.setState({
          password: e.target.value
        })
      }
      onRepeatPassword = (e) =>{
        this.setState({
            repeatPassword: e.target.value
        })
      }
      onSigninSubmit = (e) =>{
        e.preventDefault();
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