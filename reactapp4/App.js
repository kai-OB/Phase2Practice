/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator} from 'reactapp4/node_modules/@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen/content';
 const Stack = createStackNavigator(blank,blank);
 

function App() {

  return (
   
    <NavigationContainer>
       <HomeScreen/>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}
export default App;