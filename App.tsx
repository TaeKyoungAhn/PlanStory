/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren ,useState} from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Home from './src/screens/Home';
import PlanNotify from './src/screens/PlanNotify';
import PlanPage from './src/screens/PlanPage';
import PlanStory from './src/screens/PlanStory';
import PlanSettings from './src/screens/PlanSettings';

import {
} from 'react-native/Libraries/NewAppScreen';


const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView>
      <View>
            
      </View>
    </SafeAreaView>
  );
};

export default App;
