import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Modal,
         Dimensions,
         ScrollView } from 'react-native';
import { CheckBox, Icon, Button } from 'react-native-elements';
import TaskFamilyTreeNode from './task_family_tree_node';

class TaskFamilyTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected:this.props.rootTask};
  }

  isSelected(taskId) {
    return this.state.selected.id === taskId;
  }

  render() {
    const rootTask = this.props.rootTask;
    console.log('TaskFamilyTree.render: rootTask=', rootTask);

    return (
      <View>
        <TaskFamilyTreeNode
          navigation={this.props.navigation}
          task={rootTask} />
      </View>
    );
  }
}

export default TaskFamilyTree;

// <CheckBox
//   title={ rootTask.title }
//   checked={ rootTask.completed }
//   containerStyle={{backgroundColor: this.isSelected(rootTask.id) ? 'lightblue' : null}}
//   onPress={ () => this.setState({selected: rootTask}) }
//   onLongPress={ () => this.navigateToForm(rootTask) }
//   onIconPress={ () => console.log(rootTask) } />
