import React from 'react';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';
import {StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';

const LibrariesScreen = ({navigation}): React.ReactElement => {
  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <Text>TODO : LibrariesScreen</Text>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default LibrariesScreen;
