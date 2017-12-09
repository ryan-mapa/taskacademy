import React from 'react';
import { AsyncStorage, Text, View } from 'react-native';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    setTimeout(() => {
      AsyncStorage.getItem('@task-academy:auth0Id31')
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
    return (
      <View>
        <Text>Task Academy!!!!</Text>
      </View>
    );
  }
}

export default Splash;
