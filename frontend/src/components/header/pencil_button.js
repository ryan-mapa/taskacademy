import React from 'react';
import { Icon } from 'react-native-elements';

class PencilButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('PencilButton.render: this.props=', this.props);

    return (
      <Icon
        name='edit'
        size={30}
        color='green'
        containerStyle={{marginRight: 20}}
        onPress={ () => this.props.navigation.navigation.setParams({something: 'hi'}) } />
    );
  }
}

export default PencilButton;
