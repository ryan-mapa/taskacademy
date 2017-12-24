import React from 'react';
import { AsyncStorage,
         Text,
         View,
         StyleSheet
       } from 'react-native';
import Loading from '../loading/loading';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    setTimeout(() => {
      AsyncStorage.getItem('@task-academy:auth0Id47')
                  .then(googleId => {
                    console.log('googleId', googleId);
                    if (googleId) {
                      this.props.fetchUser(googleId)
                      .then(() => this.props.navigation.navigate('TaskIndex'));
                    } else {
                      this.props.navigation.navigate('Login');
                    }
                  });
    }, 2000);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>Task Academy</Text>
        <Loading />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    alignSelf: 'center'
  }
});

export default Splash;
