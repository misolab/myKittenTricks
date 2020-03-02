import {StyleService, useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {ViewStyle} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import {
  ComponentShowcase,
  ComponentShowcaseSection,
} from '../model/showcase.model';
import ShowcaseSection from './showcase-section.component';

export interface ShowcaseProps extends KeyboardAwareScrollViewProps {
  showcase: ComponentShowcase;
  settings?: {[prop: string]: any};
  renderItem: (props: any) => React.ReactElement;
}

const Showcase = (props: ShowcaseProps) => {
  const styles = useStyleSheet(themedStyles);
  const {showcase, settings, renderItem, ...containerProps} = props;
  const renderShowcaseElement = (showcaseProps: any): React.ReactElement => {
    return renderItem({...showcaseProps, ...settings});
  };

  const renderSectionElement = (
    item: ComponentShowcaseSection,
  ): React.ReactElement => (
    <ShowcaseSection section={item} renderItem={renderShowcaseElement} />
  );

  const renderSectionItem = (
    item: ComponentShowcaseSection,
    index: number,
  ): React.ReactElement => {
    const listItemElement: React.ReactElement = renderSectionElement(item);

    const borderStyle: ViewStyle | null =
      index === showcase.sections.length - 1 ? null : styles.itemBorder;

    return React.cloneElement(listItemElement, {
      key: index,
      style: [styles.item, borderStyle, listItemElement.props.style],
    });
  };
  return (
    <KeyboardAwareScrollView
      {...containerProps}
      style={[styles.container, props.style]}>
      {showcase.sections.map(renderSectionItem)}
    </KeyboardAwareScrollView>
  );
};

export default Showcase;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  item: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'border-basic-color-3',
  },
});
