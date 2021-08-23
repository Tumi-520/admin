import React from 'react';
import './index.scss'
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './home-page';
import Todo from './todo';
import Guess from './guess';
import Diary from './diary';
const Main = () => {
  return (
    <div className='main-wrapper'>
      <div className='main-box'>
        <Switch>
          <Route path={'/todo'} component={Todo} />
          <Route path={'/diary'} component={Diary} />
          <Route path={'/home'} component={HomePage} />
          <Route path={'/guess'} component={Guess} />
          <Redirect from='/*'  to='/home' />
        </Switch>
      </div>
    </div>
  );
}

export default Main;
