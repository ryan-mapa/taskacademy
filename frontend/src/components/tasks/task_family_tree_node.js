import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Modal,
         Dimensions,
         ScrollView } from 'react-native';
import { CheckBox, Icon, Button } from 'react-native-elements';

class TaskFamilyTreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  componentWillMount() {
    if (this.props.degree) {
      this.setState({degree: this.props.degree});
    } else {
      this.setState({degree: 1});
    }
  }

  componentDidUpdate() {
    console.log('state=', this.state);
  }

  handleSelect() {
    this.setState({selected: !this.state.selected});
    this.props.navigation.setParams({selected: this.props.task});
    // .then(
    //   () => this.displaySubtasks()
    // );
  }

  displaySubtasks() {
    if (this.state.selected) {
      this.props.task.subtasks.map(subtask => {
        return <TaskFamilyTreeNode />;
      });
    }
  }

  render() {
    console.log('TaskFamilyTreeNode.render: this.props.task=', this.props.task);
    // const subtasks = this.displaySubtasks();
    const task = this.props.task;
    return (
      <View>
        <CheckBox
          title={ task.title }
          checked={ task.completed }
          containerStyle={{backgroundColor: this.state.selected ? 'lightblue' : 'white'}}
          onPress={ () => this.handleSelect() }
          onLongPress={ () => this.navigateToForm(task) }
          onIconPress={ () => console.log(task) } />
      </View>
    );
  }
}

export default TaskFamilyTreeNode;
