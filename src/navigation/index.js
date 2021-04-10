import 'react-native-gesture-handler';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import * as Screens from './screenRoutes';

const Stack = createStackNavigator();

const AppScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float"
      animation="fade">
      <Stack.Screen
        name="Home"
        component={Screens.Home}
        options={{
          // title: 'picsaday', //Set Header Title
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={Screens.RestaurantDetail}
        options={{
          // title: 'picsaday', //Set Header Title
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

//App root navigator
const AppNavigator = () => {
  return <AppScreens />;
};
export default AppNavigator;
