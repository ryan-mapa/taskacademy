import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class EditButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Icon
          name='edit'
          size={30}
          color='green'
          containerStyle={{marginRight: 20}}
          onPress={ () => this.props.navigation.navigation.setParams({edit:true}) } />
      </View>
    );
  }
}

export default EditButton;
