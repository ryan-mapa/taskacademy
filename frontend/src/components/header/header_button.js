import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class HeaderButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setParams } = this.props.navigation.navigation;
    if (!this.props.navigation.navigation.state.params.task) {
      return <View></View>;
    }

    if (this.props.navigation.navigation.state.params.editable) {
      return (
        <View>
          <Icon
            name='delete'
            size={30}
            color='red'
            containerStyle={{marginRight: 20}}
            onPress={ () => setParams({ delete: true })} />
        </View>
      );
    } else {
      return (
        <View>
          <Icon
            name='edit'
            size={30}
            color='green'
            containerStyle={{marginRight: 20}}
            onPress={ () => setParams({editable: true})} />
        </View>
      );
    }
  }
}

export default HeaderButton;
