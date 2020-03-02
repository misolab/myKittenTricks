import React from 'react';
import LayoutGridList from '../../component/layout-grid-list.component';
import {data} from './data';

const AuthGridScreen = ({navigation}) => {
  const onItemPress = (index: number) => {
    navigation.navigate(data[index].route);
  };
  return <LayoutGridList data={data} onItemPress={onItemPress} />;
};

export default AuthGridScreen;
