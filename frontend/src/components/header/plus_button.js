import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

class PlusButton extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props, 'in constructor of PLUS BUTTON');
  }

  navigateToForm() {
    this.props.navigation.navigation.navigate('TaskForm', {task: null});
  }

  render() {
    return (
      <Icon
        name='add'
        size={35}
        color='green'
        containerStyle={{marginRight: 20}}
        onPress={ () => this.navigateToForm() } />
    );
  }
}

export default PlusButton;
