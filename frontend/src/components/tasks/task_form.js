import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Form, Button } from 'react-native-elements';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.task);
  }

  render() {
    return (
      <View>
        <Text>INSIDE THE TASK FORM</Text>
      </View>
    );
  }
}

export default TaskForm;
