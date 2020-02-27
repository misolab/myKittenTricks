import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ComponentsScreen from '../scene/components/components.component';

const Stack = createStackNavigator();

const ComponentsNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Components" component={ComponentsScreen} />
    </Stack.Navigator>
  );
};

export default ComponentsNavigator;
