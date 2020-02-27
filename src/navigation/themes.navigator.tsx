import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThemesScreen from '../scene/themes/themes.component';

const Stack = createStackNavigator();

export const ThemeNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Themes" component={ThemesScreen} />
    </Stack.Navigator>
  );
};
