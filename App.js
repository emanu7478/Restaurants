import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppIndex from './src';

function App() {
  return (
    <SafeAreaProvider>
      <AppIndex />
    </SafeAreaProvider>
  );
}
export default App;
