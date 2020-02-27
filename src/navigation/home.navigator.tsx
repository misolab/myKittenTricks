import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import HomeBottomNavigation from '../scene/home/home-bottom-navigation.component';
import HomeDrawer from '../scene/home/home-drawer.component';
import LibrariesScreen from '../scene/libraries/libraries.component';
import LayoutsNavigator from './layouts.navigation';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const ROOT_ROUTES = ['Home', 'Layouts', 'Components', 'Themes'];
const initialTabRoute = ROOT_ROUTES[1];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>) => {
  return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({
  route,
}): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return {tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute)};
};

export const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    initialRouteName={initialTabRoute}
    tabBar={props => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name="Layouts" component={LayoutsNavigator} />

    <BottomTab.Screen name="Components" component={LayoutsNavigator} />
    <BottomTab.Screen name="Themes" component={LayoutsNavigator} />
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{gestureEnabled: true}}
    drawerContent={props => <HomeDrawer {...props} />}>
    <Drawer.Screen name="Home" component={HomeTabsNavigator} />
    <Drawer.Screen name="Libraries" component={LibrariesScreen} />
  </Drawer.Navigator>
);
