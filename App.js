import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppIndex from './src';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AppIndex />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
