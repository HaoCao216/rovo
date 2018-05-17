import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SideMenu} from './src/Router';

export default class App extends React.Component {
  render() {
    return (
      <SideMenu />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
