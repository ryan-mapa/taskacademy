import React from 'react';
import { StackNavigator } from 'react-navigation';
// import SplashContainer from './components/splash/splash_container';
import Splash from './components/splash/splash';
import TaskIndexContainer from './components/tasks/task_index_container';

const Routers = StackNavigator(
  {
    TaskIndex: {
      screen: TaskIndexContainer
    },
    Splash: {
      screen: Splash
    }
  }
);

export default Routers;
