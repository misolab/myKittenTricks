import {Card, CardElement, List, ListProps, Text} from '@ui-kitten/components';
import {ListRenderItemInfo, StyleSheet} from 'react-native';
import {LayoutItem} from '../model/layout-item.model';

export interface LayoutListProps extends Omit<ListProps, 'renderItem'> {
  data: LayoutItem[];
  onItemPress: (index: number) => void;
}

export type LayoutListElement = React.ReactElement<LayoutListProps>;

const LayoutList = (props: LayoutListProps) => {
  const {contentContainerStyle, onItemPress, ...listProps} = props;
  const renderItem = (info: ListRenderItemInfo<LayoutItem>): CardElement => (
    <Card style={styles.itemContainer} onPress={() => onItemPress(info.index)}>
      <Text category="s1">{info.item.title}</Text>
      <Text style={styles.itemDescription} appearance="hint">
        {info.item.description}
      </Text>
    </Card>
  );

  return (
    <List
      {...listProps}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      renderItem={renderItem}
    />
  );
};

export default LayoutList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  itemContainer: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  itemDescription: {
    marginTop: 4,
  },
});
