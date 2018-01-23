import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import TaskIndexItem from './task_index_item';
import { selectMainTasks } from '../../reducers/selectors';
import { fetchAllTasks } from '../../actions/task_actions';

class TaskIndex extends React.Component {
  componentWillMount() {
    this.props.fetchAllTasks(this.props.user.id);
  }

  render() {
    return (
      <View style={ { flex: 1 } }>
        <View style={ { flex: 0.5, justifyContent: 'center', alignContent: 'center' } }>
          <Text style={ {fontSize:20, alignSelf:'center'} }>Welcome { this.props.user.first_name }</Text>
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

const mapStateToProps = (state, ownProps) => ({
  tasks: selectMainTasks(state),
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: ownerId => dispatch(fetchAllTasks(ownerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
