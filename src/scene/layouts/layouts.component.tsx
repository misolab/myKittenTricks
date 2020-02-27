import {
  Divider,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import MenuGridList from '../../component/menu-grid-list.component';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';
import Wellcome from '../../wellcome';
import {data} from './data';
import {MenuIcon} from '../../component/icons';

const LayoutsScreen = (props): React.ReactElement => {
  const onItemPress = (index: number) => {
    props.navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );

  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <TopNavigation title="Kitten Thicks" leftControl={renderDrawerAction()} />
      <Divider />
      <MenuGridList data={data} onItemPress={onItemPress} />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default LayoutsScreen;
