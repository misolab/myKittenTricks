import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';

const HomeBottomNavigation = props => {
  return (
    <SafeAreaLayout>
      <Divider />
      <BottomNavigation selectedIndex={props.state.index}>
        <BottomNavigationTab title="Layouts" />
        <BottomNavigationTab title="Components" />
        <BottomNavigationTab title="Themes" />
      </BottomNavigation>
    </SafeAreaLayout>
  );
};

export default HomeBottomNavigation;
