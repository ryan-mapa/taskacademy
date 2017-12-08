import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginContainer from './components/login/login_container';
// import SplashContainer from './components/splash/splash_container';
import Splash from './components/splash/splash';
import TaskIndexContainer from './components/tasks/task_index_container';

const Routers = StackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Login: {
      screen: LoginContainer
    },
    TaskIndex: {
      screen: TaskIndexContainer
    }
  }
);

export default Routers;
