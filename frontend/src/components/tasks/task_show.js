import React from 'react';
import { View, Text } from 'react-native';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    console.log('Inside TaskShow: props', props);
  }

  render() {
    return (
      <View>
        <Text>Hellow out there</Text>
      </View>
    );
  }
}

export default TaskShow;
