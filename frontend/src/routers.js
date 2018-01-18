import React from 'react';
import { StackNavigator } from 'react-navigation';
import SplashContainer from './components/splash/splash_container';
import LoginContainer from './components/login/login_container';
import TaskIndexContainer from './components/tasks/task_index_container';
import TaskHybridContainer from './components/tasks/task_hybrid_container';
import PlusButton from './components/header/plus_button';
import HeaderButton from './components/header/header_button';

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
    TaskHybrid: {
      screen: TaskHybridContainer,
      path: 'api/tasks/:taskId',
      navigationOptions: (navigation) => ({
        headerRight: (<HeaderButton navigation={navigation} />)
      })
    }
  }
);

export default Routers;
