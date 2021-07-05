import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createAppContainer}from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Face from './screens/facebook';
import Insta from './screens/instagram';


export default class Search extends React.Component{
  render(){
    return(
          <Appcontainer/>  
    )
  }
}

const  Tabnavigator = createBottomTabNavigator({
Facebook:{screen:Face},
Instagram:{screen:Insta},
})

const Appcontainer = createAppContainer(Tabnavigator)
