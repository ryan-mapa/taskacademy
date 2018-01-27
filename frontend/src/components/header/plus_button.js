import React from 'react';
import { Icon } from 'react-native-elements';

class PlusButton extends React.Component {
  navigateToHybrid() {
    this.props.navigation.navigation.navigate('TaskHybrid', {task: null, editable: true});
  }

  render() {
    return (
      <Icon
        name='add'
        size={35}
        color='green'
        containerStyle={{marginRight: 20}}
        onPress={ () => this.navigateToHybrid() } />
    );
  }
}

export default PlusButton;
