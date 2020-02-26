import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerElement, Text} from '@ui-kitten/components';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';

const HomeDrawer = ({navigation}): DrawerElement => {
  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <Text>TODO : HomeDrawer</Text>
    </SafeAreaLayout>
  );
};

export default HomeDrawer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
