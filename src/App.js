import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';


import Registration from './login/Registration';
import WelcomePage from './login/WelcomePage';
import './App.css';
import Welcom from './components/Welcom';
import { getUser } from './api';


function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'GET_STORE'
    });
    window.addEventListener('beforeunload', () => {
      dispatch({
        type: 'SAVE_STORE'
      });
    });
    getUser()
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Welcom} />
        <Route path='/login' component={WelcomePage} />
        <Route path='/registration' component={Registration} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default withCookies(App);
