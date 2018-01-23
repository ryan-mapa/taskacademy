import { connect } from 'react-redux';
import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox, Icon, Button } from 'react-native-elements';
import { selectSubTasks } from '../../reducers/selectors';
import { editTask } from '../../actions/task_actions';
import NestedTask from './task_index_item';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showChildren: false};
  }

  navigateToHybrid(task) {
    this.props.navigation.navigate('TaskHybrid', { task: task });
  }

  toggleCompleted(task) {
    return () => {
      task.completed = !task.completed;
      this.props.editTask(task);
    };
  }

  displayIcon() {
    const containerStyle = { left: `85%`, marginTop: -40, width: 25, height: 26 };

    if (this.props.subtasks && this.props.subtasks.length > 0) {
      console.log(this.props);
      return (
        <Icon
          name={this.state.showChildren ? 'more-horiz' : 'more-vert'}
          color='blue'
          containerStyle={containerStyle}
          alignSelf={'flex-end'}
          onPress={ () => this.toggleChildren() } />
        );
    } else {
      return <View style={containerStyle}></View>;
    }
  }

  toggleChildren() {
    this.setState({showChildren: !this.state.showChildren});
  }

  displaySubtasks() {
    if (this.state.showChildren) {
      return (
        <View
          marginTop={10}
          marginBottom={0}
          width={'90%'}
          alignSelf={'flex-end'}
        >
          {
            this.props.subtasks.map(subtask =>
              <NestedTask
                key={ subtask.id }
                navigation={ this.props.navigation}
                task={ subtask } />)
          }
        </View>
      );
    }
  }

  render() {
    const task = this.props.task;
    const icon = this.displayIcon();
    const subtasks = this.displaySubtasks();

    return (
      <View key={task.id} style={{ marginTop: 5, marginBottom: 5}}>
        <CheckBox
          title={ task.title }
          checked={ task.completed }
          onPress={ () => this.navigateToHybrid(task) }
          onLongPress={ () => this.navigateToHybrid(task) }
          onIconPress={ this.toggleCompleted(task) } />
        { icon }
        { subtasks }
      </View>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  subtasks: selectSubTasks(state, ownProps.task.id)
});

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(editTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndexItem);
