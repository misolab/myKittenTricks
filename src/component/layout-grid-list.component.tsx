import {
  Card,
  CardElement,
  CardHeader,
  CardHeaderElement,
  List,
  ListProps,
} from '@ui-kitten/components';
import React from 'react';
import {Dimensions, Image, ListRenderItemInfo, StyleSheet} from 'react-native';
import {LayoutItem} from '../model/layout-item.model';

interface LayoutGridListProps extends Omit<ListProps, 'renderItem'> {
  data: LayoutItem[];
  onItemPress: (index: number) => void;
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  itemHeader: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
  },
  itemImage: {
    height: 276,
    width: '100%',
    resizeMode: 'contain',
  },
});

export type LayoutGridListElement = React.ReactElement<LayoutGridListProps>;

const LayoutGridList = (props: LayoutGridListProps) => {
  const {contentContainerStyle, onItemPress, ...listProps} = props;

  const renderItemHeader = (
    info: ListRenderItemInfo<LayoutItem>,
  ): CardHeaderElement => (
    <CardHeader
      style={styles.itemHeader}
      title={info.item.title}
      description={info.item.description}
    />
  );

  const renderItem = (info: ListRenderItemInfo<LayoutItem>): CardElement => (
    <Card
      style={styles.itemContainer}
      header={() => renderItemHeader(info)}
      onPress={() => onItemPress(info.index)}>
      <Image style={styles.itemImage} source={info.item.image} />
    </Card>
  );

  return (
    <List
      {...listProps}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

export default LayoutGridList;
