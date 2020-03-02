import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthGridScreen from '../scene/auth/auth-grid.component';
import AuthScreen from '../scene/auth/auth.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const AuthMenuNavigator = () => {
  return (
    <TopTab.Navigator tabBar={props => <AuthScreen {...props} />}>
      <TopTab.Screen name="AuthGrid" component={AuthGridScreen} />
      <TopTab.Screen name="AuthList" component={AuthGridScreen} />
    </TopTab.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Auth" component={AuthMenuNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
