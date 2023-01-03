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
import { NavigationContainer } from '@react-navigation/native';


import Home from './src/screens/HomeFolder/Home';
import PlanNotify from './src/screens/PlanNotifyFolder/PlanNotify';
import PlanPage from './src/screens/PlanPageFolder/PlanPage';
import PlanStory from './src/screens/PlanStoryFolder/PlanStory';
import PlanSettings from './src/screens/PlanSettingsFolder/PlanSettings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
     <NavigationContainer>
        <Tab.Navigator>
           <Tab.Screen name='Home' component={Home}/>
           <Tab.Screen name='PlanPage' component={PlanPage}/>
           <Tab.Screen name='PlanStory' component={PlanStory}/>
           <Tab.Screen name='PlanNotify' component={PlanNotify}/>
           <Tab.Screen name='PlanSettings' component={PlanSettings}/>
        </Tab.Navigator>
    </NavigationContainer>            
  );
};

export default App;
