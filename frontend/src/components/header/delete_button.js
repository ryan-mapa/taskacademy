import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    console.log('DeleteButton.props=', props);
  }

  render() {
    if (this.props.navigation.navigation.state.params.task) {
      return (
        <View>
          <Icon
            name='delete'
            size={30}
            color='red'
            containerStyle={{marginRight: 20}}
            onPress={ () => this.props.navigation.navigation.setParams({delete:true}) } />
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}

export default DeleteButton;
