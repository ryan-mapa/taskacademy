import React from 'react';
import { View,
         Text,
         StyleSheet,
         ScrollView } from 'react-native';
import TaskIndexItem from './task_index_item';

class TaskIndex extends React.Component {
  componentWillMount() {
    this.props.fetchAllTasks(this.props.user.id);
  }

  render() {
    return (
      <View style={ { flex: 1 } }>
        <View style={ { flex: 0.5, justifyContent: 'center', alignContent: 'center' } }>
          <Text style={ styles.title }>Welcome { this.props.user.first_name }</Text>
        </View>

        <View style={ { flex: 10 } }>
          <ScrollView>
            {
              this.props.tasks.map(task =>
                <TaskIndexItem key={ task.id } navigation={ this.props.navigation} task={ task }/>)
              }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: 'center'
  }
});

export default TaskIndex;
