import React from 'react';
import Routers from './src/routers';
import { Provider } from 'react-redux';
import configureStore from './src/store/config_store';

class App extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={ store }>
        <Routers />
      </Provider>
    );
  }
}

export default App;
