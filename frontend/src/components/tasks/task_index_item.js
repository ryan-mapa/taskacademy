import { connect } from 'react-redux';
import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox, Icon, Button } from 'react-native-elements';
import { selectSubTasks } from '../../reducers/selectors';


class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);

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
    if (this.props.subtasks.length === 0) {
      return <View></View>;
    } else {
      return (
        <Icon
          name='more-vert'
          color='blue'
          containerStyle={ { right: -325, marginTop: -40, width: 25 } }
          onPress={ () => this.props.deleteTask(this.props.task.id) } />
      );
    }
  }

  render() {
    const task = this.props.task;
    const icon = this.displayIcon();

    return (
      <View key={task.id} style={ { marginBottom: 10 } }>
        <CheckBox
          title={ task.title }
          checked={ task.completed }
          onPress={ () => this.navigateToHybrid(task) }
          onLongPress={ () => this.navigateToHybrid(task) }
          onIconPress={ this.toggleCompleted(task) } />
        { icon }
      </View>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  subtasks: selectSubTasks(state, ownProps.task.id)
});

export default connect(mapStateToProps, null)(TaskIndexItem);
