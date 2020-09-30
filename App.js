import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import FaceBook from './screens/Facebook';
import Instagram from './screens/Instagram';

export default class App extends React.Component {
  render (){
  return (
  <AppContainer />
  );
 }
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen : FaceBook},
  Instagram : {screen : Instagram}
});

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
