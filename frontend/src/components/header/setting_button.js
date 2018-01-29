import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Auth0 from 'react-native-auth0';


// Temporarily logs out user before we implement settings
class SettingButton extends React.Component {
  logout() {
    console.log('props inside settingbutton', this.props);
    AsyncStorage.setItem('@task-academy:session_token', '')
                .then(() => this.props.navigation.navigation.navigate('Splash'))
                .catch(error => console.log(error));
  }

  render() {
    return (
      <View>
        <Icon
          name='close'
          size={ 30 }
          color='purple'
          containerStyle={ { marginLeft: 20} }
          onPress={ this.logout.bind(this) }/>
      </View>
    );
  }
}

export default SettingButton;
