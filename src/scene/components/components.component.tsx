import {
  Divider,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {MenuIcon} from '../../component/icons';
import MenuGridList from '../../component/menu-grid-list.component';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';
import {data} from './data';

const ComponentsScreen = ({navigation}) => {
  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction icon={MenuIcon} onPress={navigation.toggleDrawer} />
  );

  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <TopNavigation title="Kitten Tricks" leftControl={renderDrawerAction()} />
      <Divider />
      <MenuGridList data={data} onItemPress={onItemPress} />
    </SafeAreaLayout>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
