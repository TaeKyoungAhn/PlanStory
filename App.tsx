/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Greetings from './Components/Greeting';

import {
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
    <SafeAreaView>
      <View>
        {/*주석이 디게 특이하네..*/}
       <Greetings name ="Props"/>
      </View>
    </SafeAreaView>
  );
};

export default App;
