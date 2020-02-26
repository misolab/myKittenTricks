import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {HomeNavigator, HomeTabsNavigator} from './home.navigator';

// https://reactnavigation.org/docs/en/themes.html#__docusaurus
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const AppNavigator = () => (
  <NavigationContainer theme={navigatorTheme}>
    <HomeTabsNavigator />
  </NavigationContainer>
);
