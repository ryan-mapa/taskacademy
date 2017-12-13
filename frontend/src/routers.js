import React from 'react';
import { StackNavigator } from 'react-navigation';
import SplashContainer from './components/splash/splash_container';
import LoginContainer from './components/login/login_container';
import TaskIndexContainer from './components/tasks/task_index_container';
import TaskShowContainer from './components/tasks/task_index_container';

const Routers = StackNavigator(
  {
    Splash: {
      screen: SplashContainer
    },
    Login: {
      screen: LoginContainer
    },
    TaskIndex: {
      screen: TaskIndexContainer,
      navigationOptions: {
        headerLeft: null,
        gesturesEnabled: false
      }
    },
    TaskShow: {
      screen: TaskShowContainer
    }
  }
);

export default Routers;
