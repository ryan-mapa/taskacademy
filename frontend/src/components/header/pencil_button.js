import React from 'react';
import { Icon } from 'react-native-elements';

class PencilButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Icon
        name='edit'
        size={30}
        color='green'
        containerStyle={{marginRight: 20}}
        onPress={ () => this.props.navigation.navigation.setParams({edit:true}) } />
    );
  }
}

export default PencilButton;
