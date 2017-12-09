import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import Auth0 from 'react-native-auth0';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
    console.log('props', props);

    this.auth0 = new Auth0({
      domain: 'task.auth0.com',
      clientId: 'lvWtx57X0Yk5O6SOu520B29WNyHmDL3N'
    });

    console.log('this.auth0=', this.auth0);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo(credentials) {
    this.auth0.webAuth.client.userInfo({ 'token': credentials.accessToken })
        .then(user => {
          const { givenName, familyName } = user;
          this.props.createUser({
            first_name: givenName,
            last_name: familyName,
            auth0_id: credentials.idToken
          })
        })
        .then(() => this.props.navigation.navigate('TaskIndex'));
  }

  _onLogin = () => {
    this.auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + 'task.auth0.com'+ '/userinfo'
      })
      .then((credentials) => {
        this.setState({ accessToken: credentials.accessToken });

        AsyncStorage.setItem('@task-academy:auth0Id13', credentials.idToken)
                    .then(this.getUserInfo(credentials));
      })
      .catch(error => console.log('hello', error));
  };

  _onLogout = () => {
    if (Platform.OS === 'android') {
      this.setState({ accessToken: null });
    } else {
      this.auth0.webAuth
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
