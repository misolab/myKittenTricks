import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';
import {
  ColorPaletteIcon,
  LayoutIcon,
  StarOutlineIcon,
} from '../../component/icons';

const HomeBottomNavigation = props => {
  function onSelect(index: number) {
    props.navigation.navigate(props.state.routeNames[index]);
  }

  return (
    <SafeAreaLayout insets="bottom">
      <Divider />
      <BottomNavigation selectedIndex={props.state.index} onSelect={onSelect}>
        <BottomNavigationTab title="Layouts" icon={LayoutIcon} />
        <BottomNavigationTab title="Components" icon={StarOutlineIcon} />
        <BottomNavigationTab title="Themes" icon={ColorPaletteIcon} />
      </BottomNavigation>
    </SafeAreaLayout>
  );
};

export default HomeBottomNavigation;
