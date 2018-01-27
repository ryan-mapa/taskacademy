import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';

class SettingButton extends React.Component {
  render() {
    return (
      <View>
        <Icon
          name='dehaze'
          size={ 35 }
          color='black'
          containerStyle={ { marginLeft: 20} }
          onPress={ this.toggleModal }/>
      </View>
    );
  }
}

export default connect(null, null)(SettingButton);
