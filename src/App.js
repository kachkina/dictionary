import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';


import Registration from './login/Registration';
import WelcomePage from './login/WelcomePage';
import './App.css';
import Welcom from './components/Welcom';
import { getUser } from './api';


function App(props) {
  const dispatch = useDispatch();
  console.log(props)
  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await getUser();
      if (!user.error) {
        props.history.replace('/');
      } else {
        props.history.replace('/login');
      }
    }
    getCurrentUser();  
  }, []);
  return (
    <Switch>
      <Route exact path='/' component={Welcom} />
      <Route exact path='/login' component={WelcomePage} />
      <Route path='/registration' component={Registration} />
      <Redirect to='/' />
    </Switch>
  );
}

export default withRouter(App);
