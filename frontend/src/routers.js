import React from 'react';
import { StackNavigator } from 'react-navigation';
// import SplashContainer from './components/splash/splash_container';
import Splash from './components/splash/splash';

const Routers = StackNavigator(
  {
    Splash: {
      screen: Splash
    }
  }
);

export default Routers;
