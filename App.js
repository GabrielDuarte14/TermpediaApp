
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigations/Navigator'


export default class App extends React.Component() {
  state = {
    isFontLoaded : false
  }
 
  render (){
    return(
      (this.state.isFontLoaded === true) ? (<AppNavigator/>) : (<AppNavigator/>)
    );
  }
 
}
