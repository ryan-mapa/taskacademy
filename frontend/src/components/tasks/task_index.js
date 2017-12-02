import React from 'react';
import { View, Text } from 'react-native';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    console.log('taksindex.componentWillMount');
    // Need to have the owner_id
    this.props.fetchAllTasks(1);
  }

  render() {
    return (
      <View>
        <Text>Inside Task Index</Text>
      </View>
    );
  }
}

export default TaskIndex;
