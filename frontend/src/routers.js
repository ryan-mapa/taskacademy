import React from 'react';
import { StackNavigator } from 'react-navigation';
import SplashContainer from './components/splash/splash_container';
import LoginContainer from './components/login/login_container';
import TaskIndexContainer from './components/tasks/task_index_container';
import TaskShowContainer from './components/tasks/task_show_container';
import TaskFormContainer from './components/tasks/task_form_container';
import PlusButton from './components/header/plus_button';

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
      navigationOptions: (navigation) => ({
        headerLeft: null,
        headerRight: (<PlusButton navigation={navigation} />),
        gesturesEnabled: false
      })
    },
    TaskShow: {
      screen: TaskShowContainer,
      path: 'api/tasks/:taskId'
    },
    TaskForm: {
      screen: TaskFormContainer,
      path: 'api/tasks/:taskId'
    }
  }
);

export default Routers;
