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
import Loading from '../loading/loading';


export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('inside login constructor');
    this.state = { loading: false, accessToken: null };

    this.auth0 = new Auth0({
      domain: 'task.auth0.com',
      clientId: 'lvWtx57X0Yk5O6SOu520B29WNyHmDL3N'
    });
  }

  getUserInfo = credentials => {
    this.auth0.webAuth.client.userInfo({ 'token': credentials.accessToken })
        .then(userInfo => {
          const googleId = userInfo.sub.slice(14);
          AsyncStorage.setItem('@task-academy:auth0Id70', googleId);
          const { givenName, familyName } = userInfo;
          return this.props.createUser({
            first_name: givenName,
            last_name: familyName,
            auth0_id: googleId
          })
        })
        .then(() => setTimeout(() => {
          this.props.navigation.navigate('TaskIndex')
        }, 1000));
  }

  _onLogin = () => {
    this.setState({ loading: true }, () => {
      this.auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + 'task.auth0.com'+ '/userinfo'
      })
      .then((credentials) => {
       this.setState({ accessToken: credentials.accessToken }, () => {
         this.getUserInfo(credentials)
       });
     })
     .catch(error => {
       this.setState({ loading: false })
     });
   });
 };

  // _onLogout = () => {
  //   if (Platform.OS === 'android') {
  //     this.setState({ accessToken: null });
  //   } else {
  //     this.auth0.webAuth
  //       .clearSession({})
  //       .then(success => {
  //         this.setState({ accessToken: null });
  //       })
  //       .catch(error => console.log(error));
  //   }
  // };

  render() {
    let container;

    if (this.state.loading && !this.state.accessToken) {
      container = (
        <View />
      )
    } else if (this.state.accessToken) {
      container = (
        <Loading />
      )
    } else {
      container = (
        <View>
          <Text style={ styles.header }>Task Academy Login</Text>
          <Button
            onPress={ this._onLogin }
            title='Log In to Google' />
        </View>
      )
    }

    return (
      <View style={ styles.container }>
        { container }
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
