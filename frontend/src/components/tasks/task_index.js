import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentWillMount() {
    // console.log('taksindex.componentWillMount');
    // // Need to have the owner_id
    this.props.fetchAllTasks(this.props.user.id);
  }

  componentWillReceiveProps(newProps) {
    console.log('newProps', newProps);
  }

  toggleCompleted(task) {
    return () => {
      console.log('task before', task);
      task.completed = !task.completed;
      console.log('task after', task);
      this.props.editTask(task);
    };
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
                onPress={() => console.log('TASK SHOW PAGE')}
                onIconPress={ this.toggleCompleted(task) } />
            ))
          }
      </View>
    );
  }
}

export default TaskIndex;
