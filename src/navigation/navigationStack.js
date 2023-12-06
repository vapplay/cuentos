import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './stackRoutes';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Home">
        <Stack.Screen
          options={{headerShown: true}}
          name="Home"
          component={Routes.HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Player"
          component={Routes.PlayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
