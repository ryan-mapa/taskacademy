import React from 'react';
import { StyleSheet,
         Animated,
         Image,
         Easing } from 'react-native';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.fadeAnim = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
    this.fade();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear
      }
    ).start(() => this.spin());
  }

  fade() {
    Animated.timing(
      this.fadeAnim,
      {
        toValue: 1,
        duration: 500,
      }
    ).start();
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <Animated.Image
        style={
          {
            width: 100,
            height: 100,
            transform: [{ rotate: spin }],
            opacity: this.fadeAnim,
            alignSelf: 'center',
            padding: 50
          }
        }
        source={
          { uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/17406-200.png' }
        } />
    );
  }
}

export default Loading;
