import React from 'react';
import { StackNavigator } from 'react-navigation';
import SplashContainer from './components/splash/splash_container';
import LoginContainer from './components/login/login_container';
import TaskIndex from './components/tasks/task_index';
import TaskHybridContainer from './components/tasks/task_hybrid_container';
import PlusButton from './components/header/plus_button';
import HeaderButton from './components/header/header_button';
import SettingButton from './components/header/setting_button';

const Routers = StackNavigator(
  {
    Splash: {
      screen: SplashContainer,
      navigationOptions: {
        headerLeft: null,
        gesturesEnabled: false
      }
    },
    Login: {
      screen: LoginContainer,
      navigationOptions: {
        headerLeft: null,
        gesturesEnabled: false
      }
    },
    TaskIndex: {
      screen: TaskIndex,
      navigationOptions: navigation => ({
        headerLeft: <SettingButton navigation={ navigation } />,
        headerRight: <PlusButton navigation={ navigation } />,
        gesturesEnabled: false
      })
    },
    TaskHybrid: {
      screen: TaskHybridContainer,
      path: 'api/tasks/:taskId',
      navigationOptions: navigation => ({
        headerRight: <HeaderButton navigation={navigation} />
      })
    }
  }
);

export default Routers;
