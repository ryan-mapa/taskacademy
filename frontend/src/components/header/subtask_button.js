import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class SubtaskButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation.navigation;

    if (this.props.navigation.navigation.state.params.selected) {
      const selectedTaskId = this.props.navigation.navigation.state.params.selected.id;
      return (
        <View>
          <TouchableOpacity onPress={() => navigate('TaskHybrid', {task:null, parentId: selectedTaskId})}>
            <Text style={{marginRight: 20}}>Add Subtask</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View></View>
      );
    }
  }
}

export default SubtaskButton;
