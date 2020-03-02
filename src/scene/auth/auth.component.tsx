import {
  Tab,
  TabBar,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React from 'react';
import {ArrowIosBackIcon, GridIcon, ListIcon} from '../../component/icons';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';

const AuthScreen = ({navigation, state}) => {
  const onTabSelect = (index: number) => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
  );

  return (
    <SafeAreaLayout insets="top">
      <TopNavigation title="Auth" leftControl={renderBackAction()} />
      <TabBar selectedIndex={state.index} onSelect={onTabSelect}>
        <Tab icon={GridIcon} />
        <Tab icon={ListIcon} />
      </TabBar>
    </SafeAreaLayout>
  );
};

export default AuthScreen;
