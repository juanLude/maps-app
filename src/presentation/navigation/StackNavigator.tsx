import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoadingScreen} from '../screens/loading/LoadingScreen';
import {PermissionScreen} from '../screens/permissions/PermissionScreen';
import {MapScreen} from '../screens/maps/MapScreen';
export type RootStackParams = {
  LoadingScreen: undefined;
  PermissionsScreen: undefined;
  MapScreen: undefined;
};
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="PermissionsScreen" component={PermissionScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};
