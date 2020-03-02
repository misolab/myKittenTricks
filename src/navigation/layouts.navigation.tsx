import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LayoutsScreen from '../scene/layouts/layouts.component';
import AuthNavigator from './auth.navigator';

const Stack = createStackNavigator();

const LayoutsNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Layouts" component={LayoutsScreen} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
  );
};

export default LayoutsNavigator;
