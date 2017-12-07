import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './components/login/login';
// import SplashContainer from './components/splash/splash_container';
import Splash from './components/splash/splash';
import TaskIndexContainer from './components/tasks/task_index_container';

const Routers = StackNavigator(
  {
    Login: {
      screen: Login
    },
    Splash: {
      screen: Splash
    },
    TaskIndex: {
      screen: TaskIndexContainer
    }
  }
);

export default Routers;
