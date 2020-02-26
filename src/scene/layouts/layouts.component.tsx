import {Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';

const LayoutsScreen = (): React.ReactElement => {
  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <Text>TODO : LayoutsScreen</Text>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default LayoutsScreen;
