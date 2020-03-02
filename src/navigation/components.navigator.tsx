import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ButtonScreen from '../scene/components/button/button.component';
import ComponentsScreen from '../scene/components/components.component';

const Stack = createStackNavigator();

const ComponentsNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Components" component={ComponentsScreen} />
      <Stack.Screen name="Button" component={ButtonScreen} />
    </Stack.Navigator>
  );
};

export default ComponentsNavigator;
