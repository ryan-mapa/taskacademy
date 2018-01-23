import React from 'react';
import { AsyncStorage,
         Text,
         View,
         StyleSheet,
         Animated
       } from 'react-native';
import Loading from '../loading/loading';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.fadeAnim = new Animated.Value(0);
  }

  componentDidMount() {
    this.fade();
  }

  fade() {
    Animated.timing(
      this.fadeAnim,
      {
        toValue: 1,
        duration: 500
      }
    ).start();
  }

  componentWillMount() {
    setTimeout(() => {
      AsyncStorage.getItem('@task-academy:auth0Id62')
                  .then(googleId => {
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
    return (
      <View style={ styles.container }>
        <Animated.Text style={ { fontSize: 40,
                        alignSelf: 'center',
                        opacity: this.fadeAnim } }>Task Academy</Animated.Text>
        <Loading />
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
