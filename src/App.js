import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Registration from './login/Registration';
import WelcomePage from './login/WelcomePage';
import './App.css';
import Welcom from './components/Welcom';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'GET_STORE'
    });
    window.addEventListener('beforeunload', () => {
      dispatch({
        type: 'SAVE_STORE'
      });
    })
  })

  return (
    <Router>
      <Switch>
        <Route exact path='/(Home)?' component={Welcom} />
        <Route exact path='/(Login)?' component={WelcomePage} />
        <Route  path='/Registration' component={Registration} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
