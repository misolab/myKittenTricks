import React from 'react';
import {ViewProps, FlexStyle, View} from 'react-native';
import {StyledComponentProps, styled} from '@ui-kitten/components';
import {EdgeInsets, SafeAreaConsumer} from 'react-native-safe-area-context';

interface InsetProvider {
  toStyle: (insets: EdgeInsets, styles) => FlexStyle;
}

const INSETS: Record<string, InsetProvider> = {
  top: {
    toStyle: (insets: EdgeInsets, styles): FlexStyle => ({
      ...styles,
      paddingTop: insets.top,
    }),
  },
  bottom: {
    toStyle: (insets: EdgeInsets, styles): FlexStyle => ({
      ...styles,
      paddingTop: insets.bottom,
    }),
  },
};

type Inset = 'top' | 'bottom';

export interface SafeAreaLayoutProps extends ViewProps, StyledComponentProps {
  insets?: Inset;
  children?: React.ReactNode;
}

class SafeAreaLayoutComponent extends React.Component<SafeAreaLayoutProps> {
  static styleComponentName = 'SafeAreaLayout';

  public render(): React.ReactElement<ViewProps> {
    return <SafeAreaConsumer>{this.renderComponent}</SafeAreaConsumer>;
  }

  private createInsets = (
    insets: Inset | Inset[],
    safeAreaInsets: EdgeInsets,
    style,
  ): FlexStyle[] => {
    return React.Children.map(insets, inset =>
      INSETS[inset].toStyle(safeAreaInsets, style),
    );
  };

  private renderComponent = (
    safeAreaInsets: EdgeInsets,
  ): React.ReactElement<ViewProps> => {
    const {style, insets, themedStyle, ...viewProps} = this.props;

    return (
      <View
        {...viewProps}
        style={[this.createInsets(insets, safeAreaInsets, themedStyle), style]}
      />
    );
  };
}

export const SafeAreaLayout = styled(SafeAreaLayoutComponent);
