import React from 'react';
import { AsyncStorage,
         Text,
         View,
         StyleSheet,
         Animated,
         Image,
         Easing } from 'react-native';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
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

  componentWillMount() {
    setTimeout(() => {
      AsyncStorage.getItem('@task-academy:auth0Id47')
                  .then(googleId => {
                    console.log('googleId', googleId);
                    if (googleId) {
                      this.props.fetchUser(googleId)
                      .then(() => this.props.navigation.navigate('TaskIndex'));
                    } else {
                      this.props.navigation.navigate('Login');
                    }
                  });
    }, 2000);
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>Task Academy</Text>
        <Animated.Image
          style={
            {
              width: 100,
              height: 100,
              transform: [{ rotate: spin }],
              alignSelf: 'center',
              padding: 50
            }
          }
          source={ { uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/17406-200.png' } }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    alignSelf: 'center'
  }
});

export default Splash;
