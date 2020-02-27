import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';
import Wellcome from '../../wellcome';

const LibrariesScreen = ({navigation}): React.ReactElement => {
  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <Wellcome
        name="LibrariesScreen"
        onTap={() => navigation.navigate('Home')}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default LibrariesScreen;
