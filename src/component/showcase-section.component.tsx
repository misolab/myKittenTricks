import {TextProps} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import {
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../model/showcase.model';
import {ShowcaseItem} from './showcase-item.component';

export interface ShowcaseSectionProps extends ViewProps {
  section: ComponentShowcaseSection;
  renderItem: (props: any) => React.ReactElement;
}

const ShowcaseSection = (props: ShowcaseSectionProps) => {
  const {style, section, renderItem} = props;

  function renderTitleElement() {
    return <Text style={styles.titleLabel}>{section.title}</Text>;
  }

  const titleElement: React.ReactElement<TextProps> =
    section.title && renderTitleElement();

  function renderShowcaseItem(item: ComponentShowcaseItem, index: number) {
    return (
      <ShowcaseItem
        key={index}
        style={styles.item}
        item={item}
        renderItem={renderItem}
      />
    );
  }

  return (
    <View style={[styles.container, style]}>
      {titleElement}
      {section.items.map(renderShowcaseItem)}
    </View>
  );
};

export default ShowcaseSection;

const styles = StyleSheet.create({
  container: {},
  titleLabel: {
    marginVertical: 8,
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'left',
  },
  item: {
    marginVertical: 8,
  },
});
