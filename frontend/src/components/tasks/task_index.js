import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Modal,
         Dimensions,
         ScrollView } from 'react-native';
import { CheckBox, Icon, Button } from 'react-native-elements';
import TaskShowContainer from './task_show_container';
import TaskFormContainer from './task_form_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllTasks(this.props.user.id);
  }

  navigateToShow(task) {
    this.props.navigation.navigate('TaskShow', { taskId: task.id, header: task.title });
  }

  navigateToForm(task) {
    this.props.navigation.navigate('TaskHybrid', { task: task });
    // changed from TaskForm
  }

  toggleCompleted(task) {
    return () => {
      task.completed = !task.completed;
      this.props.editTask(task);
    };
  }

  toggleModal(boolean) {
    boolean ? this.props.openModal() : this.props.closeModal();
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
              this.props.tasks.map(task => (
              <View key={task.id} style={{marginBottom: 10}}>
                <CheckBox
                  title={ task.title }
                  checked={ task.completed }
                  onPress={ () => this.navigateToShow(task) }
                  onLongPress={ () => this.navigateToForm(task) }
                  onIconPress={ this.toggleCompleted(task) } />
                <Icon
                  name='delete'
                  color='red'
                  containerStyle={{right: -325, marginTop: -40, width: 25}}
                  onPress={() => this.props.deleteTask(task.id)} />
              </View>
              ))
            }
          </ScrollView>
        </View>

        <View style={{
          backgroundColor: 'yellow',
          borderColor: 'blue',
          borderRadius: 5,
        }}>
          <Modal
            style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}
            visible={ this.props.modalOpen }
            transparent={true}
            animationType='slide'>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'}}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'black',
              borderWidth: 1,
              backgroundColor: 'white',
              maxHeight: 100,
              width: 300 }}>
                <Button
                  small
                  backgroundColor='gray'
                  title='Cancel'
                  onPress={ () => this.toggleModal(false) } />
                <Button
                  small
                  backgroundColor='red'
                  title='Delete'
                  onPress={ () => this.deleteTask(task) } />
            </View>
            </View>
          </Modal>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: 'center'
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 20,
    marginRight: '5%',
    marginBottom: '5%',
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  }
});

export default TaskIndex;

// <View style={ { position: 'absolute', bottom: 0, right: 0, backgroundColor: 'transparent' } }>
// <TouchableOpacity
// style={ styles.addButton }
// onPress={ () => this.toggleModal(true) }>
// <Text style={ styles.addButtonText }>+</Text>
// </TouchableOpacity>
// </View>
//
// <Modal
// visible={ this.props.modalOpen }
// animationType='slide'>
// <TaskFormContainer fromIndex={ true } navigation={ this.props.navigation }/>
// <TouchableOpacity onPress={ () => this.toggleModal(false) }>
// <Text>X</Text>
// </TouchableOpacity>
// </Modal>
