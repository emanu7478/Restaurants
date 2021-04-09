import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppIndex from './src';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppIndex />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
