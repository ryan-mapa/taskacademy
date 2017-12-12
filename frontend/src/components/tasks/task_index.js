import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

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
          {
            this.props.tasks.map(task => (
              <CheckBox
                key={task.id}
                title={task.title}
                checked={task.completed}
                onPress={console.log('TASK SHOW PAGE')}
                onIconPress={} />
            ))
          }
      </View>
    );
  }
}

export default TaskIndex;
