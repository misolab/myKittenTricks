import {
  Card,
  CardElement,
  CardProps,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {View, ViewStyle} from 'react-native';

interface ThemeCardProps extends Omit<CardProps, 'children'> {
  title: string;
  isActive: boolean;
}

const ThemeCard = (props: ThemeCardProps): CardElement => {
  const styles = useStyleSheet(themedStyles);

  const {title, ...cardProps} = props;
  const colors: ViewStyle[] = [
    styles.colorItem1,
    styles.colorItem2,
    styles.colorItem3,
    styles.colorItem4,
    styles.colorItem5,
    styles.colorItem6,
  ];

  function renderHeader() {
    return (
      <View style={styles.header}>
        <Text category="h6">{title}</Text>
        <Text appearance="hint" category="c1">
          {props.isActive && 'ACTIVE'}
        </Text>
      </View>
    );
  }

  function renderColor(style: ViewStyle, index: number) {
    return <View key={index} style={[styles.colorItem, style]}></View>;
  }

  return (
    <Card {...cardProps} header={renderHeader}>
      <View style={styles.body}>{colors.map(renderColor)}</View>
    </Card>
  );
};

export default ThemeCard;

const themedStyles = StyleService.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  body: {
    flexDirection: 'row',
  },
  colorItem: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  colorItem1: {
    backgroundColor: 'background-basic-color-2',
  },
  colorItem2: {
    backgroundColor: 'background-basic-color-3',
  },
  colorItem3: {
    backgroundColor: 'background-alternative-color-2',
  },
  colorItem4: {
    backgroundColor: 'background-alternative-color-1',
  },
  colorItem5: {
    backgroundColor: 'text-basic-color',
  },
  colorItem6: {
    backgroundColor: 'color-primary-default',
  },
});
