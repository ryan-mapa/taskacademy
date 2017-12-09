import React from 'react';
import { View, Text } from 'react-native';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    // console.log('taksindex.componentWillMount');
    // // Need to have the owner_id
    this.props.fetchAllTasks(this.props.user.id);
  }

  componentWillReceiveProps(newProps) {
    console.log('newProps', newProps);
  }

  render() {
    console.log('render');
    return (
      <View>
        <Text>Hi {this.props.user.first_name}</Text>
      </View>
    );
  }
}

export default TaskIndex;
