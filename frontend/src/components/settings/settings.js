import React from 'react';
import { View, Text, Animated } from 'react-native';
import { connect } from 'react-redux';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}
