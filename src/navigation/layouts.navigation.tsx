import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LayoutsScreen from '../scene/layouts/layouts.component';

const Stack = createStackNavigator();

const LayoutsNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Layouts" component={LayoutsScreen} />
    </Stack.Navigator>
  );
};

export default LayoutsNavigator;
