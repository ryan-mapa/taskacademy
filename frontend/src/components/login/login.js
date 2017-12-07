import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Auth0 from 'react-native-auth0';

// var credentials = require('./auth0-credentials');
// const auth0 = new Auth0(credentials);
const auth0 = new Auth0({ domain: 'task.auth0.com', clientId: 'lvWtx57X0Yk5O6SOu520B29WNyHmDL3N' });

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
    console.log('props', props);
    console.log(auth0);
  }

  _onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + 'task.auth0.com'+ '/userinfo'
      })
      .then(credentials => {
        // console.log(credentials);
        // Alert.alert(
        //   'Success',
        //   'AccessToken: ' + 'lvWtx57X0Yk5O6SOu520B29WNyHmDL3N',
        //   // 'AccessToken: ' + `${console.log('bird')}`,
        //   [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        //   { cancelable: false }
        //
        // );
        // this.setState({ accessToken: 'lvWtx57X0Yk5O6SOu520B29WNyHmDL3N' });
        this.props.navigation.navigate('Splash');
      })
      .catch(error => console.log(error));
  };

  _onLogout = () => {
    if (Platform.OS === 'android') {
      this.setState({ accessToken: null });
    } else {
      auth0.webAuth
        .clearSession({})
        .then(success => {
          this.setState({ accessToken: null });
        })
        .catch(error => console.log(error));
    }
  };

  render() {
    let loggedIn = this.state.accessToken === null ? false : true;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Ryan Jacked this sample:</Text>
        <Text>
          You are {loggedIn ? '' : 'not '}logged in.
        </Text>
        <Button
          onPress={loggedIn ? this._onLogout : this._onLogin}
          title={loggedIn ? 'Log Out' : 'Log In'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent('Auth0Sample', () => Auth0Sample);
