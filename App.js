import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Container from './src/screens';

export default class App extends React.Component {
  store = store;
  render() {
    return (
      <Provider store={this.store}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Container/>
      </Provider>
    );
  }
}