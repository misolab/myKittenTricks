import React from 'react';
import LayoutList from '../../component/layout-list.component';
import {data} from './data';

const AuthListScreen = ({navigation}) => {
  const onItemPress = (index: number) => {
    navigation.navigate(data[index].route);
  };

  return <LayoutList data={data} onItemPress={onItemPress} />;
};

export default AuthListScreen;
